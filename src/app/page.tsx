import Card from '@/components/Card/Card';

export default function Home() {
  return (
    <>
      <main className="py-20">
        <div className="container">
          <form action="" className="text-center">
            <input
              type="search"
              placeholder="Enter Your Name Product"
              className="px-3 py-2 shadow-md rounded-lg w-3/4 bg-gray-200  focus:bottom-0 focus:outline-none text-black"
            />
          </form>
          <section className="cards grid grid-cols-12 gap-5 py-12 ">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </section>
        </div>
      </main>
    </>
  );
}
