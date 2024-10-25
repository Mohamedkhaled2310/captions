import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docs Page -***** ",
  description: "This is project",
};

export default function DocsPage() {
  return (
    <>
      <section className="pt-24 pb-16 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">

      <main className="w-3/4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className=" p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Card 1</h3>
            <p>Content for card 1.</p>
          </div>


          <div className=" p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Card 2</h3>
            <p>Content for card 2.</p>
          </div>


          <div className=" p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Card 3</h3>
            <p>Content for card 3.</p>
          </div>
        </div>
    </main>
      </section>
    </>
  );
}
