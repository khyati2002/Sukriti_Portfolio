import Banner from './_components/Banner';
import Experiences from './_components/Experiences';
import Skills from './_components/Skills';
import ProjectList from './_components/ProjectList';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <div className="page-">
            <Banner />
            <Skills />
            <Experiences />
            <ProjectList />
            <Footer />
        </div>
    );
}
