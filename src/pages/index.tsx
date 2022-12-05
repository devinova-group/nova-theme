import * as React from "react"
import Layout from "../components/Layout"
import { Link } from 'gatsby'
import { Text, Image } from 'theme-ui'
import CardTest from "../components/CardTest"

export default function Home() {
  return (
  <header className="bg-cover">
    <Layout>
    <section>
        <div>
          
          
          <Text variant="h1.quicksand" >Design</Text>
          <CardTest />
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester.</p>
          <Link to="/projects">My Portfolio Projects</Link>
        </div>
      </section>
    </Layout>
    </header>
  )
}
