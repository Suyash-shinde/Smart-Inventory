"use client"

import { classrooms,cards,staffrooms } from '../data';

import { useRouter } from 'next/navigation'; 
const Labs = () => {
  const router=useRouter()
  const handleOnClick = (card) =>
  {
    console.log(card);
    //console.log("Here");
    
    const path = `/Form?id=${card.index}`;

    router.push(path);

  } 
  return (
    <div className="min-h-screen p-6 bg-slate-100">
      <div className="flex flex-wrap justify-center p-10 bg-white border-2 shadow-lg rounded-xl">
        <div className="w-full mb-8">
          <h1 className="text-5xl font-bold text-center text-gray-800">Labs</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {cards.map((card) => (
            <div
              key={card.index}
              className="group relative w-64 h-80 [perspective:1000px]"
              onClick={()=>handleOnClick(card)}
            >
              <div className="relative h-full w-full rounded-xl shadow-lg transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0">
                  <img
                    src={card.labImage}
                    alt={card.labName}
                    className="object-cover w-full h-full rounded-xl"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end text-white rounded-xl">
                    {/* bg-black/40 */}
                    <div className="content-end w-full p-4 bg-gradient-to-t rounded-xl from-black/80 to-transparent h-1/2">
                      <h2 className="w-full text-2xl font-semibold">
                        {card.labName}
                      </h2>
                      <p className="text-sm">{card.labDescription}</p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl backdrop-blur-3xl p-6 text-center bg-black/70 text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex flex-col items-center justify-center min-h-full">
                    <h2 className="text-3xl font-bold">{card.labName}</h2>
                    <p className="mt-2 text-lg">Incharge: {card.labIncharge}</p>
                    <p className="mt-4 text-base">{card.labDescription}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap justify-center p-10 mt-6 bg-white border-2 shadow-lg rounded-xl">
        <div className="w-full mb-8">
          <h1 className="text-5xl font-bold text-center text-gray-800">
            Class Rooms
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {classrooms.map((classroom) => (
            <div
              key={classroom.index}
              className="group relative w-64 h-80 [perspective:1000px]"
            >
              <div className="relative h-full w-full rounded-xl shadow-lg transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0">
                  <img
                    src={classroom.classroomImage}
                    alt={classroom.classroomName}
                    className="object-cover w-full h-full rounded-xl"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end text-white bg-black/20 rounded-xl">
                    {/* bg-black/40 */}
                    <div className="content-end w-full p-4 bg-gradient-to-t rounded-xl from-black/80 to-transparent h-1/2">
                      <h2 className="w-full text-2xl font-semibold">
                        {classroom.classroomName}
                      </h2>
                      <p className="text-sm">
                        {classroom.classroomDescription}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl p-6 text-center text-slate-200 bg-black/50 backdrop-blur-sm [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex flex-col items-center justify-center min-h-full">
                    <h2 className="text-3xl font-bold">
                      {classroom.classroomName}
                    </h2>
                    <p className="mt-2 text-lg">
                      Incharge: {classroom.classroomIncharge}
                    </p>
                    <p className="mt-4 text-base">
                      {classroom.classroomDescription}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap justify-center p-10 mt-6 bg-white border-2 shadow-lg rounded-xl">
        <div className="w-full mb-8">
          <h1 className="text-5xl font-bold text-center text-gray-800">
            Staff Room
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {staffrooms.map((staffroom) => (
            <div
              key={staffroom.index}
              className="group relative w-64 h-80 [perspective:1000px]"
            >
              <div className="relative h-full w-full rounded-xl shadow-lg transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0">
                  <img
                    src={staffroom.staffroomImage}
                    alt={staffroom.staffroomName}
                    className="object-cover w-full h-full rounded-xl"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end text-white bg-black/20 rounded-xl">
                    <div className="content-end w-full p-4 bg-gradient-to-t rounded-xl from-black/80 to-transparent h-1/2">
                      <h2 className="w-full text-2xl font-semibold">
                        {staffroom.staffroomName}
                      </h2>
                      <p className="text-sm">
                        {staffroom.staffroomDescription}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl backdrop-blur-sm p-6 text-center text-slate-200  bg-black/20 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex flex-col items-center justify-center min-h-full">
                    <h2 className="text-3xl font-bold">
                      {staffroom.staffroomName}
                    </h2>
                    <p className="mt-4 text-base">
                      {staffroom.staffroomDescription}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Labs;