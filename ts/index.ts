import { EventListener } from "./EventListener"

class Application {
  private readonly eventListener = new EventListener()

  start() {
    const createForm = document.getElementById("createForm") as HTMLElement

    this.eventListener.add(
      "submit-handler",
      "submit",
      createForm,
      this.handleSubmit
    )
  }

  private handleSubmit = (e: Event) => {
    e.preventDefault()
    console.log("task")
  }
}

window.addEventListener("load", () => {
  const app = new Application()
  app.start()
})
