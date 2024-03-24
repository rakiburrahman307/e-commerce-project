import Title from "../../Hooks/Title";
import Card from "../../ReuseableComponents/Card/Card";

const JustForYou = () => {
    return (
        <section className="mx-auto bg-white p-5 rounded-lg dark:bg-semi-dark">
            <div className="mb-5">
                <Title title='Just For You'></Title>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    <Card></Card>
                </div>
        </section>
    );
};

export default JustForYou;