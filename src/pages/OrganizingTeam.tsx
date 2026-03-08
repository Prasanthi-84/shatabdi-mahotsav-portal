import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import { Search, User } from "lucide-react";

interface Person {
  name: string;
  role: string;
}

const leadership: Person[] = [
  { name: "Prof. G. P Raja Sekhar", role: "Chief Patron" },
  { name: "Prof. Pulipati King", role: "Patron" },
  { name: "Prof. K. Rambabu", role: "Co-Patron" },
];

const chairpersons: Person[] = [
  { name: "Prof. R. Padmasree", role: "Chairperson" },
  { name: "Prof. M. Shashi", role: "Chairperson" },
  { name: "Prof. M. V. R. Raju", role: "Chairperson" },
  { name: "Prof. Jaladi Ravi", role: "Chairperson" },
  { name: "Prof. K. Sitamanikyam", role: "Chairperson" },
  { name: "Prof. D. N. Raja Kumari", role: "Chairperson" },
  { name: "Prof. P. Girija Shankar", role: "Chairperson" },
];

const conveners: Person[] = [
  { name: "Prof. N. Vijay Mohan", role: "Convener" },
  { name: "Prof. S. Haranath", role: "Convener" },
];

const secretaries: Person[] = [
  { name: "Prof. N. M. Yugandhar", role: "Organizing Secretary" },
  { name: "Prof. CH. A. I. Raju", role: "Organizing Secretary" },
];

const treasurers: Person[] = [
  { name: "Prof. M. V. V. Ch. Lakshmi", role: "Treasurer" },
  { name: "Prof. B. Kishore Kumar", role: "Treasurer" },
];

const jointSecretaries: Person[] = [
  { name: "Dr. S. Jhansi Rani", role: "Joint Secretary" },
  { name: "Dr. P. Venkat Rao", role: "Joint Secretary" },
];

const members: Person[] = [
  "Dr. A. Srinivas", "Dr. B. Ramesh", "Dr. C. Lakshmi", "Dr. D. Suresh",
  "Dr. E. Priya", "Dr. F. Kumar", "Dr. G. Reddy", "Dr. H. Naidu",
  "Dr. I. Sharma", "Dr. J. Devi", "Dr. K. Rao", "Dr. L. Prasad",
].map((n) => ({ name: n, role: "Member" }));

const allPeople = [...leadership, ...chairpersons, ...conveners, ...secretaries, ...treasurers, ...jointSecretaries, ...members];

const PersonCard = ({ person, index }: { person: Person; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.03 }}
    whileHover={{ y: -6, boxShadow: "0 8px 30px hsl(43 72% 52% / 0.15)" }}
    className="glass-card rounded-xl p-5 text-center border border-gold/10 hover:border-gold/40 transition-all"
  >
    <div className="w-16 h-16 rounded-full bg-navy flex items-center justify-center mx-auto mb-3">
      <User className="text-gold" size={24} />
    </div>
    <h4 className="font-display text-base text-navy font-semibold">{person.name}</h4>
    <p className="text-xs font-body text-gold mt-1">{person.role}</p>
  </motion.div>
);

const TeamSection = ({ title, people }: { title: string; people: Person[] }) => (
  <div className="mb-12">
    <h3 className="font-display text-2xl text-navy font-bold mb-6 text-center">{title}</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {people.map((p, i) => (
        <PersonCard key={p.name} person={p} index={i} />
      ))}
    </div>
  </div>
);

const OrganizingTeam = () => {
  const [search, setSearch] = useState("");

  const filtered = search
    ? allPeople.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    : null;

  return (
    <div className="pt-20">
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4">
          <SectionTitle title="Organizing Committee" subtitle="Shatabdi Mahotsav 2026" light />
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Search */}
          <div className="max-w-md mx-auto mb-12 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input
              type="text"
              placeholder="Search members..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-gold/30 bg-card font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
            />
          </div>

          {filtered ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filtered.length > 0 ? (
                filtered.map((p, i) => <PersonCard key={p.name} person={p} index={i} />)
              ) : (
                <p className="col-span-full text-center text-muted-foreground font-body">No results found.</p>
              )}
            </div>
          ) : (
            <>
              <TeamSection title="Leadership" people={leadership} />
              <TeamSection title="Chairpersons" people={chairpersons} />
              <TeamSection title="Conveners" people={conveners} />
              <TeamSection title="Organizing Secretaries" people={secretaries} />
              <TeamSection title="Treasurers" people={treasurers} />
              <TeamSection title="Joint Secretaries" people={jointSecretaries} />
              <TeamSection title="Members" people={members} />
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default OrganizingTeam;
