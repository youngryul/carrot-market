export default function Css() {
    return (
        <div class="bg-red-100 h-screen flex gap-5 justify-center items-center">
            <div class="bg-white h-2/3 w-1/4 flex-col p-4">
                <div class="text-3xl font-bold mb-10">Weather</div>
                <div class="flex-col *:mb-3">
                    <div class="flex space-x-12 border-2 border-b-4 border-black shadow-lg rounded-2xl h-24 p-5">
                        <div class="flex-col place-content-center">
                            <div class="text-xl font-bold mb-1">Casius</div>
                            <div class="text-xs">Mars, 12AM</div>
                        </div>
                        <div class="flex">
                            <svg data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor"
                                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"></path>
                            </svg>
                            <div class="place-content-center ml-2 text-xl font-bold">85</div>
                        </div>
                    </div>
                    <div
                        class="flex space-x-12 border-2 border-black border-b-4 shadow-lg rounded-2xl h-24 p-5 bg-amber-500">
                        <div class="flex-col place-content-center">
                            <div class="text-xl font-bold mb-1">Dlacria</div>
                            <div class="text-xs">Mars, 12AM</div>
                        </div>
                        <div class="flex">
                            <svg data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor"
                                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"></path>
                            </svg>
                            <div class="place-content-center ml-2 text-xl font-bold">85</div>
                        </div>
                    </div>
                    <div
                        class="flex space-x-5 border-2 border-black border-b-4 shadow-lg rounded-2xl h-24 p-5 bg-cyan-500">
                        <div class="flex-col place-content-center">
                            <div class="text-xl font-bold mb-1 text-nowrap">New York</div>
                            <div class="text-xs">USA, 12AM</div>
                        </div>
                        <div class="flex">
                            <svg data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor"
                                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"></path>
                            </svg>
                            <div class="place-content-center ml-2 text-xl font-bold">85</div>
                        </div>
                    </div>
                    <div
                        class="flex space-x-10 border-2 border-black border-b-4 shadow-lg rounded-2xl h-24 p-5 bg-red-500">
                        <div class="flex-col place-content-center">
                            <div class="text-xl font-bold mb-1">Zomato</div>
                            <div class="text-xs">India, 12AM</div>
                        </div>
                        <div class="flex">
                            <svg data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor"
                                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"></path>
                            </svg>
                            <div class="place-content-center ml-2 text-xl font-bold">20</div>
                        </div>
                    </div>
                </div>
                <svg class="w-10 h-10 flex mx-auto mt-10 border-black border-2 border-b-4 rounded-full" data-slot="icon" fill="none"
                     strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
                </svg>
            </div>
            <div class="bg-white h-2/3 w-1/4 flex-col p-5">
                <svg class="w-10 h-10 mt-6 mb-2" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                </svg>
                <div class="flex-col justify-items-center mb-6">
                    <div class="text-xs text-gray-700 font-bold mb-2">SIMPLE TAG</div>
                    <div class="text-center text-2xl font-bold">Work with best <br/>designers</div>
                </div>
                <div class="grid grid-cols-2 h-1/2 gap-5 *:flex *:justify-center *:items-center *:border-2 *:border-black *:rounded-md">
                    <div class="bg-amber-500">
                        <svg class="w-10 h-10 text-white" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"></path>
                        </svg>
                    </div>
                    <div class="bg-cyan-500">
                        <svg class="w-10 h-10 text-white" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"></path>
                        </svg>
                    </div>
                    <div class="bg-pink-500">
                        <svg class="w-10 h-10 text-white" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"></path>
                        </svg>
                    </div>
                    <div class="bg-red-500">
                        <svg class="w-10 h-10 text-white" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"></path>
                        </svg>
                    </div>
                </div>
                <div class="mt-5 bg-blue-700 rounded-2xl p-3 font-bold text-white text-center">Let&#39; get it done</div>
            </div>
            <div class="bg-white h-2/3 w-1/4 bg-amber-500 flex-col p-5">
                <div class="flex mt-6 space-x-12">
                    <svg class="w-8 h-8 bg-white flex border-black border-2 border-b-4 rounded-full"
                         data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
                    </svg>
                    <div class="place-content-center text-xl font-bold">Friends</div>
                </div>
                <div class="mt-10 mb-4 flex space-x-8 bg-white p-3 border-black border-2 border-b-4 rounded-2xl">
                    <div class="text-nowrap">Search with love...</div>
                    <svg class="w-5 h-5 flex justify-center items-center" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
                    </svg>
                </div>
                <div class="grid grid-cols-1 gap-3">
                    <div class="flex border-black border-2 rounded-xl p-2 bg-white">
                        <div class="border-2 border-black rounded-full bg-red-500">
                            <svg class="w-10 h-10 p-1 fill-white" data-slot="icon" fill="none" strokeWidth="1.5"
                                 stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"></path>
                            </svg>
                        </div>
                        <div class="flex-col ml-3">
                            <div class="text-nowrap font-bold">Bill Rizer</div>
                            <div class="text-nowrap text-[10px]">Planet Designer</div>
                        </div>
                        <div
                            class="flex justify-center pl-1 pr-1 rounded-xl items-center ml-8 bg-amber-500 border-black border-2 text-xs">Invite
                        </div>
                    </div>
                    <div class="flex border-black border-2 rounded-xl p-2 bg-white">
                        <div class="border-2 border-black rounded-full bg-cyan-500">
                            <svg class="w-10 h-10 p-1 fill-white" data-slot="icon" fill="none" strokeWidth="1.5"
                                 stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"></path>
                            </svg>
                        </div>
                        <div class="flex-col ml-3">
                            <div class="text-nowrap font-bold">Genbei Yagy</div>
                            <div class="text-nowrap text-[10px]">Planet Designer</div>
                        </div>
                        <div
                            class="flex justify-center pl-1 pr-1 rounded-xl items-center ml-3 bg-black text-white border-black border-2 text-xs">Invited
                        </div>
                    </div>
                    <div class="flex border-black border-2 rounded-xl p-2 bg-white">
                        <div class="border-2 border-black rounded-full bg-red-500">
                            <svg class="w-10 h-10 p-1 fill-white" data-slot="icon" fill="none" strokeWidth="1.5"
                                 stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"></path>
                            </svg>
                        </div>
                        <div class="flex-col ml-3">
                            <div class="text-nowrap font-bold">Lancy Neo</div>
                            <div class="text-nowrap text-[10px]">Rogue Corp</div>
                        </div>
                        <div
                            class="flex justify-center pl-1 pr-1 rounded-xl items-center ml-5 bg-amber-500 border-black border-2 text-xs">Invite
                        </div>
                    </div>
                    <div class="flex border-black border-2 rounded-xl p-2 bg-white">
                        <div class="border-2 border-black rounded-full bg-amber-500">
                            <svg class="w-10 h-10 p-1 fill-white" data-slot="icon" fill="none" strokeWidth="1.5"
                                 stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"></path>
                            </svg>
                        </div>
                        <div class="flex-col ml-3">
                            <div class="text-nowrap font-bold">Bill Rizer</div>
                            <div class="text-nowrap text-[10px]">Hard Cops</div>
                        </div>
                        <div
                            class="flex justify-center pl-1 pr-1 rounded-xl items-center ml-8 bg-amber-500 border-black border-2 text-xs">Invite
                        </div>
                    </div>
                    <div class="flex border-black border-2 rounded-xl p-2 bg-white">
                        <div class="border-2 border-black rounded-full bg-red-500">
                            <svg class="w-10 h-10 p-1 fill-white" data-slot="icon" fill="none" strokeWidth="1.5"
                                 stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"></path>
                            </svg>
                        </div>
                        <div class="flex-col ml-3">
                            <div class="text-nowrap font-bold">Konami</div>
                            <div class="text-nowrap text-[10px]">Xenon Creator</div>
                        </div>
                        <div
                            class="flex justify-center pl-1 pr-1 rounded-xl items-center ml-8 bg-amber-500 border-black border-2 text-xs">Invite
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}