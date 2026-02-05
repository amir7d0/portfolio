"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
// import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface EducationCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
  gpa?: string;
  thesis?: string;
}

export const EducationCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  gpa,
  thesis,
}: EducationCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  // Update logic: Allow expansion if description OR thesis exists
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description || thesis) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link
      href={href || "#"}
      className="block cursor-pointer"
      // onClick={handleClick}
    >
      <Card className="flex">
        <div className="flex-none">
          <Avatar className="border size-16 sm:size-20 m-auto bg-muted-background dark:bg-foreground">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback className="text">{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow ml-4 items-center flex-col group">
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center font-semibold leading-none text-lg sm:text-xl">
                {title}
                {badges && (
                  <span className="inline-flex gap-x-1">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xs"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
                {/* <ChevronRightIcon
                  className={cn(
                    "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                /> */}
              </h3>
              <div className="text-sm sm:text-base tabular-nums text-muted-foreground text-right">
                {period}
              </div>
            </div>
            {subtitle && <div className="font-sans text-sm sm:text-base">{subtitle}</div>}
            {/* Added GPA display here */}
            {gpa && (
              <div className="font-semibold  mt-0.5">
                GPA: {gpa}
              </div>
            )}
          </CardHeader>
          
          {/* Update condition to include thesis */}
          {(description || thesis) && (
            <div className="mt-2 text-xs sm:text-base">
              {thesis && (
                <div className="mb-2">
                  <span className="font-semibold">Thesis:</span> {thesis}
                </div>
              )}
              {description}
            </div>
          )}
        </div>
      </Card>
    </Link>
  );
};