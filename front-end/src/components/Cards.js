import React from "react";
import "./Cards.css";
import CardItem from "./Pages/CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1 className="about-h1">Lamp Educational and Charitable Trust is a non-profit organization started in 2010 by Jaganathan Rajagopal in Bangalore.

When he was working in a corporate company, often he was visiting NGOs, Old Age Homes, Cancer Hospitals, and Government Schools in Bangalore as part of CSR activities, after listening to many students’ painful stories, he volunteered to donate part of his salary and also collected donations from his friends to pay fees to the school and college dropout students. Later we started donating textbooks, notebooks, stationaries, uniforms, new & old dresses, and ration kits.</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
            src="/public/images/2.jpg"
              text="Volunteers are the backbone of every organization – they not only carry the organization’s ideals within them but also spread the message far and beyond, sensitizing society towards the cause and a mission to support education in the lives of downtrodden children irrespective of their Religion, Caste & Community and to work towards the uplift of those children."
              label="JOIN"
              path="/services"
             
            />
            <CardItem
              src="/public/images/front.jpg"
              text=" Regular sponsoring is the best way to support children. It gives them confidence that their educational prospects are secured and encourages them to work hard to achieve their goals. your donation will be used entirely to cover their college, university, or specialized institutions fee and exams, private tuition, textbooks, school equipment, and transportation costs."
              label="JOIN"
              path="/services"
              />
            <CardItem
            src="/public/images/3.jpg"
              // <h1>Support A Study Center</h1>
              text="The Lamp Educational and Charitable Trust serve towards the establishment of the rights of the students & women. Providing them with quality education, Education is the major activity of the trust addition to this systematic empowerment of the rural communities particularly the women is also a key area of our NGO. We provide a “Free Study Center” for needy and poor students."
              label="JOIN"
              path="/services"
              />
          </ul>

          <ul className="cards__items">
            <CardItem
            src="front-end\public\images\4.jpg"
              text="These social skills activities can help kids forge positive relationships — and better understand what other people are feeling and thinking. It is an extracurricular activity that can be offered through school, community, and organizations. In the present situation most of rural Bengaluru both the men and women are not able to participate in social activities. Example: School newspapers, student councils, volunteering programs, sports, and youth groups, Education Awareness to Elders, Women's Gathering."
              label="JOIN"
              path="/services"
             
            />
            <CardItem
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5BQbkwIe8uQW0rzEAaY7lysrERKnuu7wj0Q&usqp=CAU"
              
              text="Job opportunity means one or more openings for full-time employment, Contractors, Project Based jobs to the job seekers in various industries, based on experience and skills.
Skills-based hiring focuses not only on priority technical skills but foundational and transferable skills.
There are a lot of jobs available, but most job seekers are lacking behind with skills and knowledge of the products and services, so we are here to make industry-ready employees and earn a high salary."
              label="JOIN"
              path="/services"
              />
            <CardItem
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5BQbkwIe8uQW0rzEAaY7lysrERKnuu7wj0Q&usqp=CAU"
              // <h1>Support A Study Center</h1>
              text="Most of us don't reuse Clothes, Shoes, Electronic Gadgets, Stationary, Bags, Toys, Furniture, and Automobiles daily, just lying in some corner occupying space and getting dusted. Please make yourself available on your week off, give them away to those in need, and bring smiles to their faces!!! Just schedule a pickup with the delivery app, and send it to our center. So we will give to the students, parents, migrant workers, and needy people. Get organized! Clear out the clutter in your closets."
              label="JOIN"
              path="/services"
              />
          </ul>
         
        </div>
      </div>
    </div>
  );
}

export default Cards;
