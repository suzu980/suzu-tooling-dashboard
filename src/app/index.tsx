import NavigationBar from "@/components/layouts/navigation-bar/navigation-bar";

function App() {
  return (
    <>
      <NavigationBar>
        <div className="flex flex-col items-center justify-center min-h-screen w-full h-full ">
          <div>Welcome to your dashboard</div>
          <div>おはようございます、しずちゃん</div>
        </div>
      </NavigationBar>
    </>
  );
}

export default App;
