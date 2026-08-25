import { createContext, useContext, useMemo, useState } from 'react';
import { defaultContent, defaultStyling, createQuestion, createOption, createCondition } from './defaultState';
import { setByPath } from '../utils/pathUtils';

const SurveyContext = createContext(null);

export function SurveyProvider({ children }) {
  const [content, setContent] = useState(defaultContent);
  const [styling, setStyling] = useState(defaultStyling);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  // Generic path-based updaters - used by almost every input in the Styling tab
  // and by a few free-form fields in the Content tab.
  const updateContent = (path, value) => {
    setContent((prev) => setByPath(prev, path, value));
  };

  const updateStyling = (path, value) => {
    setStyling((prev) => setByPath(prev, path, value));
  };

  // ----- Introduction: number of survey pages -----
  const setNumPages = (num) => {
    const n = Math.max(1, Number(num) || 1);
    setContent((prev) => {
      const questions = [...prev.questions];
      if (n > questions.length) {
        for (let i = questions.length + 1; i <= n; i += 1) {
          questions.push(createQuestion(i));
        }
      } else if (n < questions.length) {
        questions.length = n;
      }
      return { ...prev, introduction: { numPages: n }, questions };
    });
    setActiveQuestionIndex((i) => Math.min(i, n - 1));
  };

  // ----- Question helpers -----
  const updateQuestion = (index, patch) => {
    setContent((prev) => {
      const questions = prev.questions.map((q, i) => (i === index ? { ...q, ...patch } : q));
      return { ...prev, questions };
    });
  };

  const addOption = (qIndex) => {
    setContent((prev) => {
      const questions = prev.questions.map((q, i) => {
        if (i !== qIndex) return q;
         if (q.options.length >= 10) return q;
        return { ...q, options: [...q.options, createOption(q.options.length + 1)] };
      });
      return { ...prev, questions };
    });
  };

  const removeOption = (qIndex, optionId) => {
    setContent((prev) => {
      const questions = prev.questions.map((q, i) => {
        if (i !== qIndex) return q;
        if (q.options.length <= 2) return q; // minimum 2 options
        return { ...q, options: q.options.filter((o) => o.id !== optionId) };
      });
      return { ...prev, questions };
    });
  };

  const updateOption = (qIndex, optionId, text) => {
    setContent((prev) => {
      const questions = prev.questions.map((q, i) => {
        if (i !== qIndex) return q;
        return { ...q, options: q.options.map((o) => (o.id === optionId ? { ...o, text } : o)) };
      });
      return { ...prev, questions };
    });
  };

  const addCondition = (qIndex) => {
    setContent((prev) => {
      const questions = prev.questions.map((q, i) => {
        if (i !== qIndex) return q;
        return { ...q, logic: { conditions: [...q.logic.conditions, createCondition()] } };
      });
      return { ...prev, questions };
    });
  };

  const updateCondition = (qIndex, conditionId, patch) => {
    setContent((prev) => {
      const questions = prev.questions.map((q, i) => {
        if (i !== qIndex) return q;
        return {
          ...q,
          logic: {
            conditions: q.logic.conditions.map((c) => (c.id === conditionId ? { ...c, ...patch } : c)),
          },
        };
      });
      return { ...prev, questions };
    });
  };

  const removeCondition = (qIndex, conditionId) => {
    setContent((prev) => {
      const questions = prev.questions.map((q, i) => {
        if (i !== qIndex) return q;
        return { ...q, logic: { conditions: q.logic.conditions.filter((c) => c.id !== conditionId) } };
      });
      return { ...prev, questions };
    });
  };

  const value = useMemo(
    () => ({
      content,
      styling,
      activeQuestionIndex,
      setActiveQuestionIndex,
      updateContent,
      updateStyling,
      setNumPages,
      updateQuestion,
      addOption,
      removeOption,
      updateOption,
      addCondition,
      updateCondition,
      removeCondition,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [content, styling, activeQuestionIndex]
  );

  return <SurveyContext.Provider value={value}>{children}</SurveyContext.Provider>;
}

export function useSurvey() {
  const ctx = useContext(SurveyContext);
  if (!ctx) throw new Error('useSurvey must be used within a SurveyProvider');
  return ctx;
}
