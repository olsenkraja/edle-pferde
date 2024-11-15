import FamilyHorseBreeding from "./elements/family-horse-breeding";

export default async function ElementsSection() {

  return (
    <div className="bg-noble-100">
      <div
        className="relative mx-auto grid grid-cols-2 md:grid-cols-4 max-w-screen-xl md:divide-x divide-x-0 divide-gray-800/20 px-8 py-8">
        <FamilyHorseBreeding />
        <div className="relative flex h-52 flex-1 flex-col items-center justify-center space-y-2">
          <span>
            <svg
              className="h-12 w-12"
              xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
            >
              <g fill="none" stroke="currentColor" strokeWidth="1.5">
                <path
                  d="M17 8V6c0-1.886 0-2.828-.586-3.414C15.828 2 14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586C7 3.172 7 4.114 7 6v2" />
                <path
                  d="M10.564 5.783a3 3 0 0 1 2.872 0l4.794 2.614a3 3 0 0 1 1.564 2.634v4.938a3 3 0 0 1-1.564 2.634l-4.794 2.614a3 3 0 0 1-2.872 0l-4.795-2.614a3 3 0 0 1-1.563-2.634V11.03a3 3 0 0 1 1.563-2.634z" />
                <path
                  d="M11.146 11.523c.38-.682.57-1.023.854-1.023c.284 0 .474.341.854 1.023l.098.176c.108.194.162.29.246.355c.085.063.19.087.4.135l.19.043c.738.167 1.107.25 1.195.533c.088.282-.164.576-.667 1.164l-.13.152c-.143.168-.215.251-.247.355c-.032.103-.021.214 0 .438l.02.203c.076.784.114 1.177-.115 1.351c-.23.175-.576.016-1.267-.302l-.178-.083c-.197-.09-.295-.135-.399-.135c-.104 0-.202.045-.399.135l-.178.083c-.691.318-1.037.477-1.267.302c-.23-.174-.191-.567-.115-1.351l.02-.203c.021-.224.032-.335 0-.438c-.032-.104-.104-.187-.247-.355l-.13-.152c-.503-.588-.755-.882-.667-1.164c.088-.283.457-.366 1.195-.533l.19-.043c.21-.048.315-.072.4-.135c.084-.064.138-.161.246-.355z" />
              </g>
            </svg>
          </span>
          <span className="uppercase text-center">
            individuelle
            <br />
            Ausbildung
          </span>
        </div>
        <div className="relative flex h-52 flex-1 flex-col items-center justify-center space-y-2">
          <span>
            <svg
              className="h-12 w-12"
              xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
            >
              <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="M12 13a3 3 0 1 0 0-6a3 3 0 0 0 0 6" />
                <path
                  d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171q.15.19.3.371L12 21l5.13-6.248q.291-.314.54-.659z" />
              </g>
            </svg>
          </span>
          <span className="uppercase text-center">
            im Herzen des
            <br />
            Hausruckviertels
          </span>
        </div>
        <div className="relative flex h-52 flex-1 flex-col items-center justify-center space-y-2">
          <span>
            <svg
              className="h-12 w-12"
              xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"
            >
              <rect width="416" height="384" x="48" y="80" fill="none" stroke="currentColor" strokeLinejoin="round"
                    strokeWidth="32" rx="48" />
              <circle cx="296" cy="232" r="24" fill="currentColor" />
              <circle cx="376" cy="232" r="24" fill="currentColor" />
              <circle cx="296" cy="312" r="24" fill="currentColor" />
              <circle cx="376" cy="312" r="24" fill="currentColor" />
              <circle cx="136" cy="312" r="24" fill="currentColor" />
              <circle cx="216" cy="312" r="24" fill="currentColor" />
              <circle cx="136" cy="392" r="24" fill="currentColor" />
              <circle cx="216" cy="392" r="24" fill="currentColor" />
              <circle cx="296" cy="392" r="24" fill="currentColor" />
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"
                    d="M128 48v32m256-32v32" />
              <path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" d="M464 160H48" />
            </svg>
          </span>
          <span className="uppercase text-center">
            seit
            <br />
            1994
          </span>
        </div>
      </div>
    </div>
  )
}
