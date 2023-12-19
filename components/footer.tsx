import {reader} from "../app/reader";

export async function Footer() {
  return (
    <footer>
      <div className="bg-noble-900">
        <div className="relative mx-auto flex max-w-screen-xl flex-col space-y-6 px-8 py-24">
          <div className="absolute top-0 flex w-full justify-center">
            <img className="h-20 w-auto" src="https://www.edle-pferde.com/sites/default/files/flagge2.png" alt="" />
          </div>
          <div className="flex justify-center space-x-16">
            <div className="flex-1 space-y-4 text-white">
              <div className="text-xl font-semibold">Welcome to the Trakehner Gestüt Pichl in Upper Austria!</div>
              <div>On our farm we breed Trakehner horses for the highest riding standards. If we have aroused your
                   interest with our website, we look forward to your visit if you register in advance.
              </div>
              <div className="flex-1 text-white">
                <ul className="flex space-x-4">
                  <li>About Us</li>
                  <li>Gallery</li>
                  <li>Hourse for Sale</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-1 flex-col text-white">
              <span>Pramendorfer family Pichl 11 A-4716 Hofkirchen ad Tr. </span>
              <span>Tel.: +43 (0) 77 34 / 33 39</span>
              <span>Mobile: +43 (0) 664 73 62 63 69</span>
              <span>Email: gestuet@edle-pferde.com</span>
            </div>
          </div>
          <div className="flex justify-center text-white">@2024 Edle-pferde</div>
        </div>
      </div>
    </footer>
  )
}
