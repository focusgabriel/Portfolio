/** @format */

interface experienceProps {
  role: string;
  jobType: string;
  title: string;
  content: string;
  condition: string;
  techStack?: string[] | string;
}

const roleAccent: Record<string, string> = {
  "Personal Projects": "#a596f9",
  Freelance: "#f59e0b",
  Internship: "#34d399",
  "Full-time": "#22d3ee",
  Contract: "#f472b6",
};

export const getRoleAccent = (role: string) => roleAccent[role] ?? "#6a4fff";

const ExperienceCards = ({
  role,
  jobType,
  title,
  content,
  condition,
  techStack,
}: experienceProps) => {
  const isOngoing = condition.toLowerCase() === "ongoing";

  return (
    <div className="exp-card">
      <div className="exp-card__head">
        <span className="exp-role">{role}</span>
        <span className="exp-jobtype">📍 {jobType}</span>
        {isOngoing ? (
          <span className="exp-status exp-status--ongoing">
            <span className="exp-status-dot" />
            {condition}
          </span>
        ) : (
          <span className="exp-status">{condition}</span>
        )}
      </div>
      <h2 className="exp-title">{title}</h2>
      <p className="exp-content">{content}</p>

      <div>
        {techStack}
      </div>

      {/* <div>
        <ul>
          {experienceStacks.map((item) => (
            <LabelCards content={item.map((item) => (
              item.techName
            ))} />
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default ExperienceCards;
