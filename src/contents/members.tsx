//import React, { useState } from "react";
import "./members.css";
//import { div } from "framer-motion/client";



type Member = {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
};

const teamMembers: Member[] = [
  {
    id: 1,
    name: 'Aggeliki Boulala',
    role: 'Head of Dry Lab and Graphics',
    description: 'Aggeliki is a postgraduate student in Department of Medicine of Aristotle University of Thessaloniki. Aggeliki is the leader of dry lab and graphics. She provides invaluable support to the wet lab with her coding skills and she combines strong analytical skills with a creative vision. Her innovative approach and attention to detail inspire the departments to deliver their best work.',
    image: 'https://static.igem.wiki/teams/5684/wikipics/teampics/aggeliki-wiki.webp',
  },

  {
    id: 2,
    name: 'Aristotelis Michalakis',
    role: 'Co-head of Wet Lab',
    description: 'Aristotelis is an undergraduate student in the Department of Biological Applications and Technology of University of Ioannina. Aristotelis is a wet lab co-head, he brings calm, clarity and skill to every part of wet lab. A reliable, knowledgable and supportive presence in the lab.',
    image: 'https://static.igem.wiki/teams/5684/wikipics/teampics/telis-wiki.webp',
  },

  {
    id: 3,
    name: 'Dimitris Blakos',
    role: 'Member of Fundraising and Human Practices',
    description: 'Dimitris is an undergraduate student in the Department of Biological Applications and Technology of University of Ioannina. Dimitris is a member of fundraising and human practices. With outstanding communaction skills and with the ability to engage, motivate and connect with others he helps fuel our mission and create lasting partnerships.',
    image: 'https://static.igem.wiki/teams/5684/wikipics/teampics/dimitris-wiki.webp',
  },

  {
    id: 4,
    name: 'Eva Chantzaridou',
    role: 'Head of Social Media and Member Of Human Practices',
    description: 'Eva is an undergraduate student in the Department of Biological Applications and Technology of University of Ioannina. She is the leader of social media and a member of human practices. She leads the social media department with creativity and impact, while also contributing to human practices with insight and care ensuring our project connects with people effectively.',
    image: 'https://static.igem.wiki/teams/5684/wikipics/teampics/eva-wiki.webp',
  },

  {
    id: 5,
    name: 'Yiorgos Skordakis',
    role: 'Member of Social Media, Business and Human Practices',
    description: 'Giorgos is an undergraduate student in the Department of Chemistry of University of Ioannina. Giorgos brings creativity to communication, insight to business and empathy to human practices. His ability to contribute across multiple domains makes him a valuable and versatile team member.',
    image: 'https://static.igem.wiki/teams/5684/wikipics/teampics/giorgos-wiki.webp',
  },
  
  {
    id: 6,
    name: 'Ifigeneia Tychirou Anyfanti',
    role: 'Team Leader , Wet Lab Member and Fundraising Member',
    description: 'Ifigeneia is an undergraduate student in the Department of Biological Applications and Technology of University of Ioannina. Ifigeneia is the team leader, a wet lab member and a fundraising member. She combines scientific precision with strong communication and managment abilities. Her passion , precision and leadership make her a cornerstone of our team.',
    image: 'https://static.igem.wiki/teams/5684/wikipics/teampics/ifigeneia-wiki.webp',
  },
  
  {
    id: 7,
    name: 'Iliana Rapti',
    role: 'Member of Dry Lab and Graphics',
    description: 'Iliana is an undergraduate student in the Department of Computer Science and Engineering of University of Ioannina. Iliana is a member of dry lab and graphics. She contributes to the creation of eye catching graphics that help tell our story and she also supports the team with her coding skills ensuring that the team\'s content is well-presented.',
    image: 'https://static.igem.wiki/teams/5684/wikipics/teampics/iliana-wiki1.webp',
  },

  {
    id: 8,
    name: 'Ioannis Elafropoulos',
    role: 'Co-head of Human Practices and Wet Lab Member',
    description: 'Ioannis is an undergraduate student in the Department of Biological Applications and Technology of University of Ioannina. Ioannis has two roles, co-head of human practices and a wet lab member. He inspires those around him with his dedication and positive energy and he brings both heart and skill to everything he does.',
    image: 'https://static.igem.wiki/teams/5684/wikipics/teampics/giannis-wiki.webp',
  },

  {
    id: 9,
    name: 'Mary Peristeri',
    role: 'Member of Wet Lab',
    description: 'Mary is an undergraduate student in the Department of Medicine of University of Ioannina. Mary is a wet lab member. She brings a unique medical perspective to the wet lab, combining her academic background in medicine. Her curiosity truly enriches the team.',
    image: 'https://static.igem.wiki/teams/5684/wikipics/teampics/mairi-wiki.webp',
  },

  {
    id: 10,
    name: 'Panagiotis Michailidis',
    role: 'Member of Wet Lab',
    description: 'Panagiotis is a master\'s student in Infectious Diseases Department of Molecular Biology and Genetics of Democritus University of Thrace. Panagiotis is a dedicated member of wet lab team. His professionalism and careful attention to detail ensures that all experiments are conducted accurately and safely.',
    image: 'https://static.igem.wiki/teams/5684/wikipics/teampics/panagiotis-wiki.webp',
  },

  {
    id: 11,
    name: 'Pandelis Chavianidis',
    role: 'Co-head of Human Practices, Member of Social Media',
    description: 'Pantelis is an undergraduate student in the Department of Biological Applications and Technology of University of Ioannina. Pantelis is a co-head of human practices and a social media member. He brings more than just leadership, he brings personality. A talented guitarist and singer with a great sense of humor.',
    image: 'https://static.igem.wiki/teams/5684/wikipics/teampics/pantelis-wiki.webp',
  },
  
  {
    id: 12,
    name: 'Stella Dimitriou',
    role: 'Member of Human Practices and Human Practices',
    description: 'Stella is an undergraduate student in the Department of Biological Applications and Technology of University of Ioannina. Stella is a member of social media and human practices. Stella is a member of social media and human practices. She brings energy and rythm to everything she does. Both through her love for dancing and her ability to engage and connect with others.',
    image: 'https://static.igem.wiki/teams/5684/wikipics/teampics/stella-wiki.webp',
  },

  
  {
    id: 13,
    name: 'Sokratis Papathanasiou',
    role: 'Head of Business, Member of Human Practices',
    description: 'Sokratis is an undergraduate student in the Department of Biological Applications and Technology of University of Ioannina. Sokratis leads the business team with focus, always considering the broader social implications of our work through their involvement in Human Practices. He effectively bridges business strategy with human-centered approaches.',
    image: 'https://static.igem.wiki/teams/5684/wikipics/teampics/sokratis-wiki.webp',
  },

  
  {
    id: 14,
    name: 'Thomas Katikos',
    role: 'Co-head of Wet Lab',
    description: 'Thomas is an undergraduate student in the Department of Biological Applications and Technology of University of Ioannina. Thomas is a wet lab co-head. He sets a high standard for lab work and inspires those around him to do their best.',
    image: 'https://static.igem.wiki/teams/5684/wikipics/teampics/thomas-wiki.webp',
  },

  {
    id: 15,
    name: 'Vasiliki Savvidou',
    role: 'Co-head of Human Practices, Member of Wet Lab',
    description: 'Vasiliki is an undergraduate student in the Department of Biological Applications and Technology of University of Ioannina. Vasiliki is a co-head of human practices and a wet lab member. She is a calm and insightful presence, valued for her patience, teamwork and the ability to connect ideas with people.',
    image: 'https://static.igem.wiki/teams/5684/wikipics/teampics/vaso-wiki.webp',
  },

  {
    id: 16,
    name: 'Zisis Psalidas',
    role: 'Member of Dry Lab and Graphics',
    description: 'Zisis is an undergraduate student in the Department of Computer Science and Engineering of University of Ioannina. Zisis is a dry lab and graphics member. He contributes to both dry lab and graphics using his excellent 3d design skills , to create clear, impactful visuals that bring our scientific ideas to life.',
    image: 'https://static.igem.wiki/teams/5684/wikipics/teampics/zhshs-wiki.webp',
  },

];

export function Members() {
  return (
    <div className="members-container">
      <h2>Meet Our Team</h2>
      <div className="cards-wrapper">
        {teamMembers.map((member) => (
          <div key={member.id} className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={member.image} alt={member.name} className="member-image" />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
              <div className="flip-card-back">
                <p>{member.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
