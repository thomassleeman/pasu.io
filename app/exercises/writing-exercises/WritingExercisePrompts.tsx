// Sanity
import { PortableText } from "@portabletext/react";
import portableTextComponents from "@/sanity/schemas/portableText/portableTextComponents";

// Icons
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import logo from "@/components/design/brainLogoCompressed.png";

/* ---------------------------- Type Definitions ---------------------------- */

type UserInputs = {
  [key: string]: string;
};

interface DecryptedInputs {
  [key: string]: any;
}

interface PreviousInputData {
  decryptedUserInput?: DecryptedInputs;
  createdAt?: string;
  // (Optional) If you want to read progress from Firestore, you could include:
  // completedPrompts?: number;
  // totalPrompts?: number;
  // completionPercentage?: number;
}

interface Prompt {
  _key: string;
  content: any;
}

interface PromptGroup {
  _key: string;
  heading?: string;
  prompts: Prompt[];
}

interface Section {
  _key: string;
  slug: string;
  sectionTitle: string;
  promptGroups: PromptGroup[];
}

/* ------------------------- Main Form Component ---------------------------- */

export default function WritingExercisePrompts({
  prompts,
}: {
  prompts: Section[];
}) {
  console.log("prompts:", prompts);

  return (
    <section className="relative">
      {prompts.map((section) => (
        <div key={section._key} id={section.slug} className="mb-4">
          <h2 className="py-2 text-2xl font-thin">{section.sectionTitle}</h2>
          <div className="w-full rounded-lg border-2 border-emerald-700 p-4">
            {section.promptGroups.map((group) => (
              <details key={group._key} className="group mb-4" open>
                <summary className="flex cursor-pointer justify-between">
                  <h3 className="font-light">{group.heading}</h3>
                  <div className="flex items-center">
                    <ChevronDownIcon className="h-5 w-5 text-emerald-700 group-open:hidden" />
                    <ChevronUpIcon className="hidden h-5 w-5 text-emerald-700 group-open:inline" />
                  </div>
                </summary>
                <div className="mt-4 group-open:block">
                  {group.prompts.map((prompt, idx) => {
                    const textareaKey = `${section._key}-${group._key}-${
                      prompt._key || idx
                    }`;
                    return (
                      <div key={prompt._key || idx} className="mb-4">
                        <PortableText
                          value={prompt.content}
                          components={portableTextComponents}
                        />
                      </div>
                    );
                  })}
                </div>
              </details>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
