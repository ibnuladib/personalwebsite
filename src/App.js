import logo from './logo.svg';

import Button from './components/button';

function App() {
  return (
    <main className="mx-auto px-4 md:w-3/4 lg:w-1/2 mt-24 max-w-[820px] flex flex-col gap-10">
        <section className="flex flex-col md:flex-row items-center gap-10">
            <img 
                src="https://github.com/ibnuladib.png" 
                alt="Profile Picture" 
                className="rounded-full mb-6 md:mb-0 w-[220px] h-[220px]" 
            />
            <div className="text-center items-center md:text-left">
                <div className='items-center'>
                <h2 className="mb-8 text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 text-transparent bg-clip-text">
  Hi, I'm Adib.
</h2>
                    <p className="text-2xl md:text-2xl font-bold text-white-400">computer science student | wannabe dev </p>
                    <div className="lg:ml-16 mt-8 md:mt-12 flex justify-center md:justify-start gap-3">
                        <Button btnName="GitHub" />
                        <Button btnName="LinkedIn" />
                </div> 
                </div>

            </div>
        </section>

        
            <section className="bottom mt-16" style={{width: "100%"}}>
                <h3 className="text-xl font-bold mb-8">RECENT PROJECTS</h3>
                
                <div className="post">
                    <div className="flex items-center mb-2">
                        <h4 className="text-2xl font-bold">Appointment Scheduling WebApp</h4>
                    </div>
                    <div className="text-gray-400 mb-4">2024</div>
                    <p class="text-gray-300">................................</p>
                </div>
                <div className="post">
                    <div className="flex items-center mb-2">
                        <h4 className="text-2xl font-bold">Email to Calender Codeforces Script</h4>
                    </div>
                    <div className="text-gray-400 mb-4">2024</div>
                    <p className="text-gray-300">...................................</p>
                </div>
        
            </section>
        </main>
  );
}

export default App;
