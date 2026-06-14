"use client";

import { useMemo, useState } from "react";

interface SellAnswers {
  [key: string]: any;
}

export function useSellFlow() {
  // =========================
  // STATES
  // =========================

  const [step, setStep] = useState(1);

  const [answers, setAnswers] =
    useState<SellAnswers>({});

  // =========================
  // SAVE ANSWER
  // =========================

  const updateAnswer = (
    key: string,
    value: any
  ) => {
    setAnswers((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // =========================
  // NEXT STEP
  // =========================

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  // =========================
  // PREVIOUS STEP
  // =========================

  const prevStep = () => {
    setStep((prev) =>
      prev > 1 ? prev - 1 : 1
    );
  };

  // =========================
  // RESET FLOW
  // =========================

  const resetFlow = () => {
    setStep(1);

    setAnswers({});
  };

  // =========================
  // PROGRESS
  // =========================

  const progress = useMemo(() => {
    return Math.min((step / 10) * 100, 100);
  }, [step]);

  // =========================
  // RETURN
  // =========================

  return {
    // states
    step,
    answers,
    progress,

    // actions
    updateAnswer,
    nextStep,
    prevStep,
    resetFlow,
  };
}