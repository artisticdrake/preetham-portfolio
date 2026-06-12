import puppeteer from 'puppeteer-core'
import fs from 'node:fs'

const edgePaths = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
]
const executablePath = edgePaths.find(p => fs.existsSync(p))

const browser = await puppeteer.launch({ executablePath, headless: true })
const page = await browser.newPage()
await page.setViewport({ width: 1280, height: 1000 })
await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' })

// Scroll through the page so whileInView animations fire, then settle on target
await page.evaluate(async () => {
  document.documentElement.style.scrollBehavior = 'auto'
  for (let y = 0; y < document.body.scrollHeight; y += 700) {
    window.scrollTo(0, y)
    await new Promise(r => setTimeout(r, 60))
  }
})
await new Promise(r => setTimeout(r, 800))

const selector = process.argv[2] ?? '#hackathons'
const out = process.argv[3] ?? 'shot.png'
const el = await page.$(selector)
await el.scrollIntoView()
await new Promise(r => setTimeout(r, 900))
const box = await el.boundingBox()
await page.setViewport({ width: 1280, height: Math.min(Math.ceil(box.height) + 100, 8000) })
await new Promise(r => setTimeout(r, 600))
await el.screenshot({ path: out })
console.log('saved', out)
await browser.close()
