import CheckList from "@/components/Check-list/Check-list";

export default function TodoZone({
  checkList,
}: {
  checkList: { id?: number; name: string; isCompleted: boolean }[];
}) {
  console.log(checkList);

  return (
    <div className="flex items-start flex-col w-full">
      <svg
        width="101"
        height="36"
        viewBox="0 0 101 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="101" height="36" rx="18" fill="#BEF264" />
        <path
          d="M36.0587 13.47V15.666L32.9447 15.882V23.478C32.9447 23.778 32.8367 24.036 32.6207 24.252C32.4167 24.468 32.1587 24.576 31.8467 24.576H30.3167V16.098L27.4547 16.296V14.28L36.0587 13.47ZM41.7751 22.596C42.5551 22.596 43.1911 22.29 43.6831 21.678C44.1871 21.066 44.4391 20.178 44.4391 19.014C44.4391 17.934 44.2231 17.118 43.7911 16.566C43.3591 16.002 42.8011 15.72 42.1171 15.72C41.3251 15.72 40.6711 16.026 40.1551 16.638C39.6391 17.25 39.3811 18.138 39.3811 19.302C39.3811 20.382 39.6031 21.204 40.0471 21.768C40.4911 22.32 41.0671 22.596 41.7751 22.596ZM36.9511 19.446C36.9511 18.27 37.1611 17.256 37.5811 16.404C38.0131 15.552 38.5951 14.886 39.3271 14.406C40.0711 13.914 40.9111 13.614 41.8471 13.506C42.1591 13.482 42.3931 13.47 42.5491 13.47C43.4491 13.47 44.2531 13.668 44.9611 14.064C45.6811 14.46 46.2451 15.06 46.6531 15.864C47.0731 16.668 47.2831 17.664 47.2831 18.852C47.2831 20.136 47.0371 21.228 46.5451 22.128C46.0651 23.028 45.4111 23.7 44.5831 24.144C43.7671 24.588 42.8551 24.81 41.8471 24.81C40.9111 24.81 40.0711 24.606 39.3271 24.198C38.5951 23.802 38.0131 23.202 37.5811 22.398C37.1611 21.594 36.9511 20.61 36.9511 19.446ZM56.0489 22.434C56.6129 22.41 57.1049 22.236 57.5249 21.912C57.9569 21.576 58.2869 21.132 58.5149 20.58C58.7429 20.028 58.8569 19.428 58.8569 18.78C58.8569 17.856 58.6409 17.106 58.2089 16.53C57.7769 15.942 57.1949 15.648 56.4629 15.648C56.3789 15.648 56.2409 15.66 56.0489 15.684L54.6449 15.918V22.488L56.0489 22.434ZM52.3229 14.28L56.0489 13.524C56.3249 13.464 56.6429 13.434 57.0029 13.434C57.8309 13.434 58.5929 13.65 59.2889 14.082C59.9969 14.514 60.5549 15.114 60.9629 15.882C61.3829 16.65 61.5929 17.52 61.5929 18.492C61.5929 19.596 61.3349 20.616 60.8189 21.552C60.3029 22.488 59.6189 23.232 58.7669 23.784C57.9149 24.324 57.0089 24.594 56.0489 24.594H53.5829C53.2349 24.594 52.9349 24.468 52.6829 24.216C52.4429 23.976 52.3229 23.682 52.3229 23.334V14.28ZM67.8611 22.596C68.6411 22.596 69.2771 22.29 69.7691 21.678C70.2731 21.066 70.5251 20.178 70.5251 19.014C70.5251 17.934 70.3091 17.118 69.8771 16.566C69.4451 16.002 68.8871 15.72 68.2031 15.72C67.4111 15.72 66.7571 16.026 66.2411 16.638C65.7251 17.25 65.4671 18.138 65.4671 19.302C65.4671 20.382 65.6891 21.204 66.1331 21.768C66.5771 22.32 67.1531 22.596 67.8611 22.596ZM63.0371 19.446C63.0371 18.27 63.2471 17.256 63.6671 16.404C64.0991 15.552 64.6811 14.886 65.4131 14.406C66.1571 13.914 66.9971 13.614 67.9331 13.506C68.2451 13.482 68.4791 13.47 68.6351 13.47C69.5351 13.47 70.3391 13.668 71.0471 14.064C71.7671 14.46 72.3311 15.06 72.7391 15.864C73.1591 16.668 73.3691 17.664 73.3691 18.852C73.3691 20.136 73.1231 21.228 72.6311 22.128C72.1511 23.028 71.4971 23.7 70.6691 24.144C69.8531 24.588 68.9411 24.81 67.9331 24.81C66.9971 24.81 66.1571 24.606 65.4131 24.198C64.6811 23.802 64.0991 23.202 63.6671 22.398C63.2471 21.594 63.0371 20.61 63.0371 19.446Z"
          fill="#15803D"
        />
      </svg>
      {checkList.length > 0 ? (
        checkList.map((item, index) => {
          console.log(item.id);

          return (
            <li key={index} className="list-none">
              <CheckList list={item.name} Active={false} id={item.id!} />
            </li>
          );
        })
      ) : (
        <div className="flex flex-col gap-4 items-center items-center w-full">
          <img
            src="/Type=todo, Size=Small.svg"
            alt=""
            className="block md:hidden"
          />
          <img
            src="/Type=Todo, Size=Large.svg"
            alt=""
            className="hidden md:block"
          />
          <div className="flex flex-col items-center font-bold text-slate-400">
            <p>할 일이 없어요.</p>
            <p>TODO 를 새롭게 추가해주세요!</p>
          </div>
        </div>
      )}
    </div>
  );
}
