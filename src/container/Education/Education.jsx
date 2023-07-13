import React, { useState, useEffect } from 'react';
// import ReactTooltip from 'react-tooltip';

import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client, urlFor } from '../../client';
import './Education.scss';

const Education = () => {
  const [edu, setEdu] = useState([]);
  useEffect(() => {
    const query = '*[_type == "education"]';

    client.fetch(query).then((data) => {
      setEdu(data.reverse());
    });
  }, []);
  // eslint-disable-next-line no-console
  // console.log(edu);
  return (
    <>
      <motion.h2 className="head-text pb-6">Education</motion.h2>
      <motion.div className="w-full align-center flex items-center justify-center">
        <motion.div className="bg-white rounded-lg shadow-xl border p-12 pr-0 pb-8 w-8xl">
          {
            edu.map((subedu) => (
              <motion.div className="flex justify-center items-center mb-8">
                <motion.div className="w-1/5">
                  <motion.img className="h-24 rounded-full border border-gray-100 shadow-sm" src={urlFor(subedu.icon)} alt="user" />
                </motion.div>
                <motion.div className="w-4/5 text-xl md:ml-0 sm:ml-4">
                  <motion.div>
                    <motion.span className="font-semibold text-gray-800">{subedu.courseName}</motion.span>
                    <motion.span className="text-gray-400"> from </motion.span>
                    <motion.b className="text-blue-500"> {subedu.instuitionName}  </motion.b>
                    <motion.span className="text-gray-400 invisible"> fromsdfadsf </motion.span>
                  </motion.div>
                  <motion.div className="font-semibold md:-mt-4 sm:mt-2">
                    <motion.span className="text-gray-400">Passing Year: </motion.span>
                    <motion.b className="text-gray-800"> {subedu.passingYear} </motion.b>
                    <br />
                    <motion.span className="text-gray-400">Percentage: </motion.span>
                    <motion.b className="text-gray-800"> {subedu.grade} </motion.b>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))
          }
        </motion.div>
      </motion.div>
    </>
  );
};
// eslint-disable-next-line no-undef
export default AppWrap(
  // eslint-disable-next-line no-undef
  MotionWrap(Education, 'app__education'),
  'education',
  'app__primarybg',
);
