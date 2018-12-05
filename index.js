export default class eventTimer {
    
    constructor() {
        this.running = false
        this.finished = false
        this.startTime = null
        this.endTime = null
        this.totalTime = null
    }

    start() {
        this.running = true
        this.startTime = Date.now()
    }

    stop() {
        this.running = false
        this.endTime = Date.now()
        this._calculateFinal()
        return this.totalTime
    }

    _calculateFinal() {
        const value = this.endTime - this.startTime
        this.totalTime = value
        this.finished = true
    }
}
