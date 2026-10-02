export type DemoProfile = {
  id: string;
  name: string;
  age: number;
  city: string;
  relationshipGoal: string;
  recoveryDuration: string;
  recoveryBoundary: string;
  attachment: string;
  enneagram: string;
  interests: string[];
  about: string;
  compatibility: {
    recovery: number;
    goals: number;
    lifestyle: number;
    communication: number;
  };
  why: string[];
};

export const demoProfiles: DemoProfile[] = [
  {
    id: "jordan",
    name: "Jordan",
    age: 31,
    city: "Norfolk, VA",
    relationshipGoal: "Long-term relationship",
    recoveryDuration: "3 years in recovery",
    recoveryBoundary: "Substance-free household",
    attachment: "Secure",
    enneagram: "Type 9",
    interests: ["Hiking", "Cooking", "Live music"],
    about: "I value calm communication, consistency, and building a life that feels steady and honest.",
    compatibility: { recovery: 96, goals: 94, lifestyle: 88, communication: 93 },
    why: [
      "You both want a long-term relationship",
      "You both prefer a substance-free household",
      "You both value open communication",
      "You both enjoy outdoor activities",
    ],
  },
  {
    id: "maya",
    name: "Maya",
    age: 29,
    city: "Virginia Beach, VA",
    relationshipGoal: "Committed relationship",
    recoveryDuration: "2 years, 4 months in recovery",
    recoveryBoundary: "Sober partner preferred",
    attachment: "Secure leaning",
    enneagram: "Type 2",
    interests: ["Yoga", "Books", "Beach walks"],
    about: "Recovery taught me to be clear about my boundaries and gentle about other people's stories.",
    compatibility: { recovery: 91, goals: 89, lifestyle: 92, communication: 86 },
    why: [
      "You share similar recovery boundaries",
      "You both want a committed relationship",
      "You prefer emotionally open communication",
    ],
  },
  {
    id: "alex",
    name: "Alex",
    age: 34,
    city: "Chesapeake, VA",
    relationshipGoal: "Long-term relationship",
    recoveryDuration: "5 years in recovery",
    recoveryBoundary: "No recreational drugs",
    attachment: "Anxious-secure",
    enneagram: "Type 6",
    interests: ["Fitness", "Coffee", "Travel"],
    about: "I'm looking for something intentional, supportive, and grounded in trust.",
    compatibility: { recovery: 84, goals: 95, lifestyle: 82, communication: 78 },
    why: [
      "You both want something long-term",
      "You share similar lifestyle preferences",
      "You both value consistency",
    ],
  },
];

export const demoMessages = [
  { id: 1, sender: "Jordan", body: "What does a healthy relationship look like to you?", time: "7:42 PM" },
  { id: 2, sender: "You", body: "Consistency, honesty, and being able to talk through hard things without shutting down.", time: "7:45 PM" },
  { id: 3, sender: "Jordan", body: "That sounds really aligned with what I'm looking for too.", time: "7:47 PM" },
];
