import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Parser from 'html-react-parser';
// import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);
  const [activeEx, setActiveEx] = useState(0);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';
    setActiveEx(0);
    // console.log(activeEx);
    client.fetch(query).then((data) => {
      data.sort((a, b) => {
        // eslint-disable-next-line no-underscore-dangle
        const c = new Date(a._createdAt);
        // eslint-disable-next-line no-underscore-dangle
        const d = new Date(b._createdAt);
        return c - d;
      });
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      data.sort((a, b) => {
        // eslint-disable-next-line no-underscore-dangle
        const c = new Date(a._createdAt);
        // eslint-disable-next-line no-underscore-dangle
        const d = new Date(b._createdAt);
        return c - d;
      });
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="app__skills-exp">
          {experiences.map((experience, idx) => (
            <>
              <motion.ul>
                <motion.li className="mb-4 -ml-5 bg-white rounded-2xl">
                  <motion.button type="button" className="flex w-full text-left">
                    <motion.div className="w-auto mr-8">
                      <motion.span className="flex items-center justify-center w-12 h-12 text-lg font-bold bg-blue-100 rounded-full">{idx + 1}</motion.span>
                    </motion.div>
                    <motion.div className="w-full mt-3">
                      <motion.div className="flex items-center justify-between" onClick={() => setActiveEx(idx)}>
                        <motion.h3 className="text-xl font-bold">{experience.title}  <em className="text-blue-500">@ {experience.company}</em></motion.h3>
                        <motion.span className="ml-4">
                          <motion.svg className={activeEx === idx ? 'w-4 h-4' : 'w-4 h-4 hidden'} width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <motion.path d="M1.18267 9.00018C0.910673 9.26818 0.473672 9.26818 0.203672 9.00018C-0.0663284 8.73218 -0.0673279 8.29918 0.203672 8.03118L8.11167 0.201183C8.38167 -0.0668173 8.81867 -0.0668173 9.09067 0.201183L16.9987 8.03118C17.2687 8.29918 17.2687 8.73218 16.9987 9.00018C16.7277 9.26818 16.2897 9.26818 16.0197 9.00018L8.60067 1.85918L1.18267 9.00018Z" fill="#1F40FF" />
                          </motion.svg>
                        </motion.span>
                        <motion.span className={activeEx === idx ? 'hidden ml-4' : 'ml-4'}>
                          <motion.svg className="w-4 h-4" width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <motion.path d="M16.0185 0.999999C16.2905 0.732 16.7275 0.732 16.9975 0.999999C17.2675 1.268 17.2685 1.701 16.9975 1.969L9.0895 9.799C8.8195 10.067 8.3825 10.067 8.1105 9.799L0.2025 1.969C-0.0675004 1.701 -0.0675004 1.268 0.2025 1C0.4735 0.732 0.9115 0.732 1.1815 1L8.6005 8.141L16.0185 0.999999Z" fill="#1F40FF" />
                          </motion.svg>
                        </motion.span>
                      </motion.div>
                      <motion.p className="text-gray-400">{experience.startDate} - {experience.endDate}</motion.p>
                      <motion.div className={activeEx === idx ? 'mt-6 border-l-2 border-gray-50 pl-10' : 'mt-6 border-l-2 border-gray-50 pl-10 hidden'}>
                        {experience.desc.map((desciption) => (
                          <>
                            <motion.span className="block -ml-6 mt-6 h-2 w-2 rounded-full bg-blue-500" />
                            <motion.p className="mb-2 -mt-4 text-lg">
                              <motion.span className="mt-10">{Parser(desciption)}</motion.span>
                            </motion.p>
                          </>
                        ))}
                      </motion.div>
                    </motion.div>
                  </motion.button>
                </motion.li>
              </motion.ul>
              {/* <motion.div
                className="app__skills-exp-item"
                key={experience.endDate}
              >
                <div className="app__skills-exp-year">
                  <p className="bold-text">{experience.startDate} - {experience.endDate}</p>
                </div>
                <motion.div className="app__skills-exp-works">
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-exp-work"
                    data-tip
                    data-for={experience.title}
                    key={experience.title}
                  >
                    <h4 className="bold-text">{experience.title}</h4>
                    <p className="p-text">{experience.company}</p>
                  </motion.div>
                  <ReactTooltip
                    id={experience.title}
                    effect="solid"
                    arrowColor="#fff"
                    className="skills-tooltip"
                  > */}
              {/* {experience.desc.join('\r\n')} */}
              {/* </ReactTooltip>
                </motion.div>
              </motion.div> */}
            </>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
