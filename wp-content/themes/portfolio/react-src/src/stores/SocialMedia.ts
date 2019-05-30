import {observable, action, computed} from 'mobx'
import {api} from '../api'
import makeInspectable from 'mobx-devtools-mst'

interface SocialMediaAccount {
    iconClasses: string
    link: string
    name: string
}

export class SocialMediaStore {
    @observable accounts: SocialMediaAccount[] = []
    @observable fetching = false;

    @action fetch = async () => {
        this.fetching = true;
        let {data} = await api.get('social_media')
        this.accounts = data;
        this.fetching = false;
    }
}

const store = new SocialMediaStore();
makeInspectable(store);
export default store;