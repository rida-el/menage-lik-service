import Question from "./question";
import { useState, useEffect } from "react";

interface QuestionData {
  question: string;
  answer: string;
}

const FAQ = () => {
  // open question state
  const [expanded, setExpanded] = useState<number>(-1);

  return (
    <section className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
      <div className="flex w-full flex-col items-center justify-center gap-2 px-4 py-16">
        <h2 className="text-left text-3xl font-semibold text-primaryColor md:text-4xl">
          Question et réponse
        </h2>
        <div className="w-12 border-4 border-secondaryColor font-medium text-secondaryColor"></div>
        <p>Nos réponses aux questions que nous attendons de vous.</p>
        <div className="my-12 flex w-full items-center justify-center gap-7">
          <div className="items-center justify-center "></div>
        </div>
        <div className="FAQ-container flex w-full flex-col items-start gap-4">
          {items.map((q, i) => (
            <Question
              key={i}
              question={q}
              index={i}
              expanded={i === expanded}
              setExpanded={setExpanded}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const items = [
  {
    question: "Comment puis-je commander un service ?",
    answer:
      "vous pouvez le faire en une seule étape en remplissant le formulaire ci-dessus ou vous pouvez nous appeler directement au +212653153357",
  },
  {
    question: "Quelles industries servez-vous ?",
    answer:
      "Certaines des industries que nous servons: Immeubles de bureaux, Nettoyages industriels, Industrie hôtelière, Établissements d'enseignement, Edifices religieux, Centres d'événements, Centres commerciaux, Banques",
  },
  {
    question: "Que faire si je ne suis pas satisfait de mon service ?",
    answer:
      "Votre bonheur est la raison pour laquelle nous faisons notre travail. Si vous n'êtes pas satisfait à 100 % de nos services, nous vous contacterons et trouverons le moyen de remédier à la situation.",
  },
  {
    question: "Comment déterminez-vous mon prix de nettoyage ?",
    answer: "Votre prix dépend de la taille de votre espace..",
  },
  {
    question: "Les avantages de Menage lik services ?",
    answer:
      "Plus de 5 ans d' expérience dans l'industrie du nettoyage, Des concierges formés professionnellement, Engagement envers la plus haute qualité de nettoyage, Expertise spécialisée pour les besoins spécifiques à l'industrie, Options de nettoyage de jour et de nuit, Solutions de nettoyage personnalisées.",
  },
];

export default FAQ;
