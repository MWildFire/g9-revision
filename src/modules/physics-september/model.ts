export function remaining(initial: number, time: number, halfLife: number) {
  if (
    ![initial, time, halfLife].every(Number.isFinite) ||
    initial < 0 ||
    time < 0 ||
    halfLife <= 0
  )
    throw new RangeError("Invalid decay values");
  return initial * 2 ** (-time / halfLife);
}
export function netRate(
  counts: number,
  seconds: number,
  backgroundCounts: number,
  backgroundSeconds: number,
) {
  if (
    ![counts, seconds, backgroundCounts, backgroundSeconds].every(
      Number.isFinite,
    ) ||
    counts < 0 ||
    backgroundCounts < 0 ||
    seconds <= 0 ||
    backgroundSeconds <= 0
  )
    throw new RangeError("Invalid count data");
  return counts / seconds - backgroundCounts / backgroundSeconds;
}
export function daughter(
  A: number,
  Z: number,
  mode: "alpha" | "beta" | "gamma",
) {
  const next =
    mode === "alpha"
      ? { A: A - 4, Z: Z - 2 }
      : mode === "beta"
        ? { A, Z: Z + 1 }
        : { A, Z };
  if (
    !Number.isInteger(A) ||
    !Number.isInteger(Z) ||
    next.Z < 0 ||
    next.A < next.Z
  )
    throw new RangeError("Invalid nucleus");
  return next;
}
export function decayStep(
  survivors: number[],
  probability: number,
  rng = Math.random,
) {
  if (probability < 0 || probability > 1)
    throw new RangeError("Invalid probability");
  return survivors.filter(() => rng() >= probability);
}
export const STUDY_KEY = "physics-september-2026-v1";
export type StudyState = {
  completed: string[];
  answers: Record<string, string>;
};
export function parseStudyState(raw: string | null): StudyState {
  try {
    const data = JSON.parse(raw ?? "{}");
    const completed = Array.isArray(data?.completed)
      ? data.completed.filter(
          (v: unknown): v is string => typeof v === "string",
        )
      : [];
    const answers: Record<string, string> = {};
    if (
      data?.answers &&
      typeof data.answers === "object" &&
      !Array.isArray(data.answers)
    ) {
      for (const [k, v] of Object.entries(data.answers))
        if (typeof v === "string") answers[k] = v;
    }
    return { completed, answers };
  } catch {
    return { completed: [], answers: {} };
  }
}
