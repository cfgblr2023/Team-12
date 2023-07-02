import React, { useState } from 'react';

import './Lms.css';
const courses = [
    {
        id: 1,
        title: 'Course on Tailoring',
        description: 'Tailoring is an art form that combines precision and creativity to create beautifully crafted garments. In a tailoring course, you will learn the fundamental skills needed to bring your clothing designs to life. From understanding fabric properties to mastering cutting and sewing techniques, youll gain the knowledge to create well-fitted and stylish garments. The course will also teach you the importance of proper measurement and fitting, ensuring that your creations are comfortable and flattering. Whether you aspire to be a professional tailor or simply want to enhance your sewing skills, a tailoring course will equip you with the tools needed to pursue your passion.',
        videoUrl: 'https://www.youtube.com/watch?v=DPeRIVOaTw4'
    },
    {
        id: 2,
        title: 'Course on Handloom',
        description: 'Handloom weaving is a traditional method of fabric production that dates back centuries. It involves the skilled art of weaving fabric by hand on a loom. Handloom textiles are known for their unique texture, intricate patterns, and artisanal charm. These fabrics are often made using natural fibers like cotton, silk, or wool, resulting in sustainable and environmentally friendly textiles. Handloom weaving preserves traditional techniques and supports local communities, as it is often a source of livelihood for many artisans. The beauty and authenticity of handloom textiles continue to captivate fashion enthusiasts worldwide, making them a timeless choice for those who appreciate craftsmanship and cultural heritage',
        videoUrl: 'https://youtu.be/on4eryo_2Kg',
    },
    {
        id: 3,
        title: 'Course on incense stick',
        description: 'Incense sticks, also known as agarbatti, have been used for centuries in various cultures for spiritual, meditative, and aromatic purposes. These slender sticks are made by combining aromatic plant materials, such as herbs, resins, and wood powders, with a binding agent. When lit, they release fragrant smoke that creates a calming and soothing ambiance. Incense sticks are commonly used during religious ceremonies, yoga practices, and meditation sessions, as the pleasant aroma is believed to purify the air and enhance focus. Additionally, they are popular for their ability to create a fragrant atmosphere in homes and create a sense of tranquility.',
        videoUrl: 'https://www.youtube.com/watch?v=CT29eTQ0wnk',
    },
    {
        id: 4,
        title: 'Courses on Fishry',
        description: 'Fishery refers to the industry and practice of catching, processing, and selling fish and other seafood. It plays a vital role in providing a valuable food source for human consumption and supporting livelihoods around the world. Fishery operations can range from small-scale, traditional fishing methods to large commercial operations that utilize advanced technology. Sustainability and responsible fishing practices are crucial to maintain the health of marine ecosystems and ensure the long-term availability of fish stocks. Fishery management and regulations are implemented to protect fish populations, prevent overfishing, and conserve marine biodiversity. The fishery industry contributes to global food security and provides economic opportunities for fishing communities.',
        videoUrl: 'https://www.youtube.com/watch?v=ipfI-SmplDA',
    },
    // {
    //     id: 5,
    //     title: 'Course 5',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet ligula a ligula ullamcorper, sed tempor nulla finibus. Nullam ac metus sed justo venenatis placerat.',
    //     videoUrl: 'https://www.youtube.com/embed/video5',
    // },
    // {
    //     id: 6,
    //     title: 'Course 6',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet ligula a ligula ullamcorper, sed tempor nulla finibus. Nullam ac metus sed justo venenatis placerat.',
    //     videoUrl: 'https://www.youtube.com/embed/video6',
    // },
];

function LMS() {
    const [selectedCourse, setSelectedCourse] = useState(null);

    const handleCourseClick = (course) => {
        setSelectedCourse(course);
    };

    return (
        <div className="app">
            <header className="header">
                <h1 className="heading">LMS - Learning Management System</h1>
            </header>

            <div className="container" >
                <nav className="sidebar">
                    <ul className="course-list">
                        {courses.map((course) => (
                            <li key={course.id} className={`course-item ${selectedCourse === course ? 'active' : ''}`} onClick={() => handleCourseClick(course)}>
                                {course.title}
                            </li>
                        ))}
                    </ul>
                </nav>

                <main className="main">
                    {selectedCourse ? (
                        <div className="course-details">
                            <h2 className="course-title">{selectedCourse.title}</h2>
                            <p className="course-description">{selectedCourse.description}</p>
                            <div className="video-container">
                                <iframe
                                    className="video-iframe"
                                    src={selectedCourse.videoUrl}
                                    title={selectedCourse.title}
                                    frameBorder="0"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    ) : (
                        <div className="no-course-selected">Please select a course from the list</div>
                    )}
                </main>
            </div>
        </div >
    );
}

export default LMS;