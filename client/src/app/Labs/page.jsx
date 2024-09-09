const cards = [
  {
    index: 1,
    labName: "Lab 1",
    labImage: "https://picsum.photos/200/300",
    labDescription: "This is lab 1",
    labIncharge: "John Doe",
  },
  {
    index: 2,
    labName: "Lab 2",
    labImage: "https://picsum.photos/200/300",
    labDescription: "This is lab 2",
    labIncharge: "Jane Doe",
  },
  {
    index: 3,
    labName: "Lab 3",
    labImage: "https://picsum.photos/200/300",
    labDescription: "This is lab 3",
    labIncharge: "John Doe",
  },
  {
    index: 4,
    labName: "Lab 4",
    labImage: "https://picsum.photos/200/300",
    labDescription: "This is lab 4",
    labIncharge: "Jane Doe",
  },
  {
    index: 5,
    labName: "Lab 5",
    labImage: "https://picsum.photos/200/300",
    labDescription: "This is lab 5",
    labIncharge: "John Doe",
  },
  {
    index: 6,
    labName: "Lab 6",
    labImage: "https://picsum.photos/200/300",
    labDescription: "This is lab 6",
    labIncharge: "Jane Doe",
  },
];

const page = () => {
  return (
    <div className="min-h-screen p-6 bg-slate-100">
      <div className="flex flex-wrap justify-center">
        <div className="w-full mb-8">
          <h1 className="text-5xl font-bold text-center text-gray-800">Labs</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {cards.map((card) => (
            <div
              key={card.index}
              className="group relative w-72 h-96 [perspective:1000px]"
            >
              <div className="relative h-full w-full rounded-xl shadow-lg transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0">
                  <img
                    src={card.labImage}
                    alt={card.labName}
                    className="object-cover w-full h-full rounded-xl"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end text-white bg-black/20 rounded-xl">
                    {/* bg-black/40 */}
                    <div className="content-end w-full p-4 bg-gradient-to-t rounded-xl from-black/80 to-transparent h-1/2">
                      <h2 className="w-full text-2xl font-semibold">
                        {card.labName}
                      </h2>
                      <p className="text-sm">{card.labDescription}</p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl backdrop-blur-sm p-6 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
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
    </div>
  );
};

export default page;
