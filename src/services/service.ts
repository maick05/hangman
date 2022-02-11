export abstract class Service<Repository> {
    constructor(protected readonly repository: Repository) {}
}
