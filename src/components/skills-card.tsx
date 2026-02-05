import React from "react";

type SkillCategory = {
  category: string;
  items: string[];
};

export default function SkillsCard({
  skills,
}: {
  skills: readonly SkillCategory[] | readonly any[];
}) {
  return (
    <div className="mt-2 text-lg">
      <div className="border-t border-muted-foreground/20 pt-3">
        {skills.map((cat: SkillCategory) => (
          <div
            key={cat.category}
            className="grid grid-cols-12 items-start gap-4 py-2"
          >
            <div className="col-span-12 sm:col-span-3 font-bold">
              {cat.category}
            </div>
            <div className="col-span-12 sm:col-span-9 ">
              {cat.items.join(", ")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
