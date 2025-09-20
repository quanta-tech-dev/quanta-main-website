import Footer from '@/app/(home)/sections/Footer';
import Header from '@/app/(home)/sections/Header';


export default function HomeLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            <Header/>
            {children}
            <Footer/>
        </main>
    );
}
