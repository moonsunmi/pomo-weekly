import { RRule, RRuleSet, rrulestr } from "rrule";

const TestingRrule = () => {
  const rule = new RRule({
    freq: RRule.WEEKLY,
    byweekday: [RRule.MO, RRule.FR],
    dtstart: new Date(2022, 10, 1, 10, 30),
    until: new Date(),
  });
  const dates = rule.all();

  //console.log(dates);

  return (
    <div>
      TestringRrule.js
      {dates.map((date, index) => (
        <span key={index}>{date.getUTCMonth()}</span>
      ))}
    </div>
  );
};

export default TestingRrule;
