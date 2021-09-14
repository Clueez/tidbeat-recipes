import { useRouter } from 'next/router';
import Info from '../../components/info';

export default function Detail(){
    const router = useRouter();
    const { id } = router.query; 
    return(
        <Info />
    );
}