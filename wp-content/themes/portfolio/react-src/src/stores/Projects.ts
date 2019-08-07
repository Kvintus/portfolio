import {observable, action, computed, toJS} from 'mobx'
import {api} from '../api'
import makeInspectable from 'mobx-devtools-mst'

export interface Project {
    name: string
    intro: string
    description: string
    technologies: string[]
    images: string[]
    title_image: string
    slug: string
}

export class ProjectsStore {
    @observable projects: Project[] = []
    @observable fetching = false;

    @action fetch = async () => {
        this.fetching = true;
        let {data} = await api.get('projects')
        this.projects = data;
        this.fetching = false;
    }

    async getProject(projectSlug: string) {
        if (!this.projects.length) {
            await this.fetch();
        }
        let projectsFiltered = this.projects.filter(project => projectSlug === project.slug)
        let project;
        if (projectsFiltered.length === 0) {
            project = null
        } else {
            project = projectsFiltered[0]
        }
        return project;
    } 
}

const store = new ProjectsStore();
makeInspectable(store);
export default store;