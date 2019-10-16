import {observable, action, computed} from 'mobx'
import {api} from '../api'
import makeInspectable from 'mobx-devtools-mst'

export class InfoStore {
    @observable age: Number;
    @observable location: String;
    @observable phone: String;
    @observable email: String;
    @observable fetching = false;

    @action fetch = async () => {
        this.fetching = true;
        let {data} = await api.get('section/about-me')
        console.log(data);
    }
}

const infoStore = new InfoStore();
makeInspectable(infoStore);
export default infoStore;