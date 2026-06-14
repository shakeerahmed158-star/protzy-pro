"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowRight } from "lucide-react";

import { FadeUp } from "../../../components/animations/fade-up";
import { Reveal } from "../../../components/animations/reveal";
import QuestionCard from "../../../components/sell-phone/question-card";

import { SELL_QUESTIONS } from "../../../constants/sell-questions";

import { useSellStore } from "../../../stores/useSellStore";


type AnswersType = {
  calls: boolean | null;
  touch: boolean | null;
  screenOriginal: boolean | null;
  defects: string[];
  functional: string[];
  warranty: boolean | null;
  gst: boolean | null;
  age: string | null;
  accessories: string[];
};

export default function DetailsPage() {
  const router = useRouter();
  const params = useSearchParams();

  const brand = params.get("brand") || "";
  const device = params.get("device") || "";
  const ram = params.get("ram") || "";
  const storage = params.get("storage") || "";

  const [step, setStep] = useState(1);

  const [answers, setAnswers] = useState<AnswersType>({
    calls: null,
    touch: null,
    screenOriginal: null,
    defects: [],
    functional: [],
    warranty: null,
    gst: null,
    age: null,
    accessories: [],
  });

  const selectAnswer = (
    key: keyof AnswersType,
    value: boolean | string | string[]
  ) => {
    setAnswers((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const toggleGrid = (
    key: "defects" | "functional" | "accessories",
    value: string
  ) => {
    const arr = answers[key];

    if (arr.includes(value)) {
      setAnswers((prev) => ({
        ...prev,
        [key]: arr.filter((item) => item !== value),
      }));
    } else {
      setAnswers((prev) => ({
        ...prev,
        [key]: [...arr, value],
      }));
    }
  };

  const nextStep = () => {
    if (step < 6) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    localStorage.setItem(
      "deviceAnswers",
      JSON.stringify(answers)
    );

    const query = new URLSearchParams({
      brand,
      device,
      ram,
      storage,
      answers: JSON.stringify(answers),
    }).toString();

  router.push(
  `/sell-phone/final-price?brand=${brand}&device=${device}&ram=${ram}&storage=${storage}`
)
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-black">
      <div className="mx-auto max-w-4xl px-4 py-14">
        <FadeUp>
          <div className="mb-10">
            <h1 className="text-4xl font-bold md:text-5xl">
              Device
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                {" "}
                Inspection
              </span>
            </h1>

            <p className="mt-4 text-zinc-800">
              Answer a few quick questions to get the best resale
              price instantly.
            </p>
          </div>
        </FadeUp>

        <Reveal>
          <div className="rounded-[32px] border border-slate-200 bg-white shadow-2xl/5 p-6 backdrop-blur-2xl md:p-8">
            {/* PROGRESS */}
            <div className="mb-10 flex gap-2">
              {[1, 2, 3, 4, 5, 6].map((s) => (
                <div
                  key={s}
                  className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                    step >= s
                      ? "bg-blue-500"
                      : "bg-white shadow-2xl/10"
                  }`}
                />
              ))}
            </div>

            {/* STEP CONTENT */}
            {step === 1 && (
              <Section title="Basic Device Health">
                <YesNo
                  title="Able to make calls?"
                  value={answers.calls}
                  onYes={() => selectAnswer("calls", true)}
                  onNo={() => selectAnswer("calls", false)}
                />

                <YesNo
                  title="Touch screen working?"
                  value={answers.touch}
                  onYes={() => selectAnswer("touch", true)}
                  onNo={() => selectAnswer("touch", false)}
                />

                <YesNo
                  title="Original display?"
                  value={answers.screenOriginal}
                  onYes={() =>
                    selectAnswer("screenOriginal", true)
                  }
                  onNo={() =>
                    selectAnswer("screenOriginal", false)
                  }
                />
              </Section>
            )}

            {step === 2 && (
              <Section title="Physical Defects">
                <GridOption
                  title="Screen Scratch"
                  active={answers.defects.includes("scratch")}
                  onClick={() =>
                    toggleGrid("defects", "scratch")
                  }
                />

                <GridOption
                  title="Dead Pixel"
                  active={answers.defects.includes("pixel")}
                  onClick={() =>
                    toggleGrid("defects", "pixel")
                  }
                />

                <GridOption
                  title="Body Dent"
                  active={answers.defects.includes("dent")}
                  onClick={() =>
                    toggleGrid("defects", "dent")
                  }
                />

                <GridOption
                  title="Panel Missing"
                  active={answers.defects.includes("panel")}
                  onClick={() =>
                    toggleGrid("defects", "panel")
                  }
                />
              </Section>
            )}

            {step === 3 && (
              <Section title="Functional Problems">
                <GridOption
                  title="Face Sensor Issue"
                  active={answers.functional.includes("face")}
                  onClick={() =>
                    toggleGrid("functional", "face")
                  }
                />

                <GridOption
                  title="Power Button Issue"
                  active={answers.functional.includes("power")}
                  onClick={() =>
                    toggleGrid("functional", "power")
                  }
                />

                <GridOption
                  title="Charging Port Issue"
                  active={answers.functional.includes("charging")}
                  onClick={() =>
                    toggleGrid("functional", "charging")
                  }
                />

                <GridOption
                  title="Volume Button Issue"
                  active={answers.functional.includes("volume")}
                  onClick={() =>
                    toggleGrid("functional", "volume")
                  }
                />
              </Section>
            )}

            {step === 4 && (
              <Section title="Warranty Information">
                <YesNo
                  title="Device under warranty?"
                  value={answers.warranty}
                  onYes={() => selectAnswer("warranty", true)}
                  onNo={() => selectAnswer("warranty", false)}
                />

                <YesNo
                  title="GST bill available?"
                  value={answers.gst}
                  onYes={() => selectAnswer("gst", true)}
                  onNo={() => selectAnswer("gst", false)}
                />
              </Section>
            )}

            {step === 5 && (
              <Section title="Device Age">
                <Option
                  title="Below 3 Months"
                  active={answers.age === "3"}
                  onClick={() => selectAnswer("age", "3")}
                />

                <Option
                  title="3 - 6 Months"
                  active={answers.age === "6"}
                  onClick={() => selectAnswer("age", "6")}
                />

                <Option
                  title="6 - 11 Months"
                  active={answers.age === "11"}
                  onClick={() => selectAnswer("age", "11")}
                />

                <Option
                  title="Above 11 Months"
                  active={answers.age === "12"}
                  onClick={() => selectAnswer("age", "12")}
                />
              </Section>
            )}

            {step === 6 && (
              <Section title="Accessories Included">
                <GridOption
                  title="Original Box"
                  active={answers.accessories.includes("box")}
                  onClick={() =>
                    toggleGrid("accessories", "box")
                  }
                />

                <GridOption
                  title="Charger"
                  active={answers.accessories.includes(
                    "charger"
                  )}
                  onClick={() =>
                    toggleGrid("accessories", "charger")
                  }
                />

                <GridOption
                  title="Cable"
                  active={answers.accessories.includes("cable")}
                  onClick={() =>
                    toggleGrid("accessories", "cable")
                  }
                />
              </Section>
            )}

            {/* BUTTON */}
            <button
              onClick={nextStep}
              className="group mt-10 flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 px-8 py-5 text-lg font-semibold text-black transition-all duration-300 hover:scale-[1.01] hover:bg-blue-500"
            >
              {step === 6
                ? "Get Exact Price"
                : "Continue"}

              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

/* ---------- COMPONENTS ---------- */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="mb-6 text-3xl font-bold">{title}</h2>

      <div className="space-y-4">{children}</div>
    </div>
  );
}

function YesNo({
  title,
  value,
  onYes,
  onNo,
}: {
  title: string;
  value: boolean | null;
  onYes: () => void;
  onNo: () => void;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-2xl/5 p-5">
      <p className="mb-4 text-lg font-medium">{title}</p>

      <div className="flex gap-4">
        <button
          onClick={onYes}
          className={`rounded-xl px-6 py-3 font-medium transition-all ${
            value === true
              ? "bg-blue-600 text-black"
              : "bg-white shadow-2xl/5 text-zinc-300 hover:bg-white shadow-2xl/10"
          }`}
        >
          Yes
        </button>

        <button
          onClick={onNo}
          className={`rounded-xl px-6 py-3 font-medium transition-all ${
            value === false
              ? "bg-blue-600 text-black"
              : "bg-white shadow-2xl/5 text-zinc-300 hover:bg-white shadow-2xl/10"
          }`}
        >
          No
        </button>
      </div>
    </div>
  );
}

function GridOption({
  title,
  active,
  onClick,
}: {
  title: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-2xl border p-5 text-left transition-all duration-300 ${
        active
          ? "border-blue-500 bg-blue-500/10"
          : "border-slate-200 bg-white shadow-2xl/5 hover:border-blue-500/40 hover:bg-white shadow-2xl/10"
      }`}
    >
      {title}
    </button>
  );
}

function Option({
  title,
  active,
  onClick,
}: {
  title: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-2xl border p-5 text-left transition-all duration-300 ${
        active
          ? "border-blue-500 bg-blue-600 text-black"
          : "border-slate-200 bg-white shadow-2xl/5 hover:border-blue-500/40 hover:bg-white shadow-2xl/10"
      }`}
    >
      {title}
    </button>
  );
}