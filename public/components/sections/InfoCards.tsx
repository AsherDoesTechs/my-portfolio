import Card from "../ui/Card";
import { FaUser, FaBriefcase, FaHeart } from "react-icons/fa";

export default function InfoCards() {
  return (
    <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6 mt-5 mb-24">
      <Card title="Who I Am" icon={<FaUser />}>
        I’m a passionate IT student and tech enthusiast who loves exploring
        programming, experimenting with new tools, and building small projects
        to level up my skills.
      </Card>

      <Card title="What I Do" icon={<FaBriefcase />}>
        I create web applications and interactive software using HTML, CSS,
        JavaScript, React, and Next.js.turning ideas into functional and
        user-friendly experiences.
      </Card>

      <Card title="What Drives Me" icon={<FaHeart />}>
        I’m motivated by curiosity, learning new technologies, and one day
        becoming a professional software developer who builds impactful and
        creative digital solutions.
      </Card>
    </section>
  );
}
