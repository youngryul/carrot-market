export default function Phone() {
    return (
        <div
            class="bg-orange-500 h-screen w-screen flex justify-center items-center *:font-mono *:font-bold relative z-30">
            <div class="bg-black h-3/4 w-2/5 rounded-[50px] p-7 absolute z-20"></div>
            <div class="bg-black h-8 w-28 absolute rounded-b-[15px] z-30 top-36"></div>
            <div class="flex-col space-y-24 bg-white h-4/6  w-2/6  rounded-3xl z-20 overflow-hidden">
                <div>
                    <select class="border-0 mt-10 mb-1 ml-2">
                        <option>March 2024</option>
                        <option>April 2024</option>
                    </select>
                    <hr class="border-[1.6px] mr-2 ml-2"/>
                    <div class="flex-col justify-items-center mt-2">
                        <div>Hello, Bruno!</div>
                        <div>Your medicines for today</div>
                    </div>
                    <div class="flex justify-center space-x-7 mt-5">
                        <div class="flex-col justify-items-center hover:bg-blue-500 hover:rounded-xl">
                            <div class="text-2xl mb-2">16</div>
                            <div class="text-sm">Mon</div>
                        </div>
                        <div class="flex-col justify-items-center hover:bg-blue-500 hover:rounded-xl">
                            <div class="text-2xl mb-2">17</div>
                            <div class="text-sm">Tue</div>
                        </div>
                        <div class="flex-col justify-items-center hover:bg-blue-500 hover:rounded-xl">
                            <div class="text-2xl mb-2">18</div>
                            <div class="text-sm">Wed</div>
                        </div>
                        <div class="flex-col justify-items-center hover:bg-blue-500 hover:rounded-xl">
                            <div class="text-2xl mb-2">19</div>
                            <div class="text-sm">Thu</div>
                        </div>
                        <div class="flex-col justify-items-center hover:bg-blue-500 hover:rounded-xl">
                            <div class="text-2xl mb-2">20</div>
                            <div class="text-sm">Fri</div>
                        </div>
                        <div class="flex-col justify-items-center hover:bg-blue-500 hover:rounded-xl">
                            <div class="text-2xl mb-2">21</div>
                            <div class="text-sm">Sat</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="flex relative">
                        <div class="flex-col space-y-16 bg-amber-200 w-64 h-36 ml-2 p-2 rounded-2xl z-10">
                            <div>
                                <div class="text-2xl">Nora - BE</div>
                                <div class="text-xs">Norenthindrone - 0.35mg</div>
                            </div>
                            <div class="text-xs">7h30AM</div>
                        </div>
                        <div
                            class="bg-blue-500 flex place-content-end pr-2 h-36 w-16 absolute left-60 rounded-2xl">
                            <svg class="w-7" data-slot="icon" fill="none" strokeWidth="1.5"
                                 stroke="currentColor"
                                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="m4.5 12.75 6 6 9-13.5"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="ml-2 mr-2 mt-3 bg-green-500 h-48 w-[18.5rem] rounded-2xl">
                        <div class="p-5">
                            <div class="text-2xl">Feosol</div>
                            <div class="text-xs">Ferrous Sulfate - 600mg</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}