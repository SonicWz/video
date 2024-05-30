import { AppRouter } from "./app/providers/router";
import { Navbar } from "./widgets/Navbar";
export interface appTypes {}

const App = () => {
  return (
    <div className="container flex flex-col w-screen h-screen">
      <Navbar />
      <section className="w-full">
        <AppRouter />
      </section>
    </div>
  );
};

export default App;
