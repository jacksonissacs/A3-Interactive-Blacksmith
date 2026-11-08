# Assignment 3 · Interactive Blacksmith

**MTM6302 — Web Development with JavaScript**

The Tiny Forge starts with 20 heat and zero swords. Open `index.html` in a browser to play.

1. Enter a positive whole number in **Heat to add**, then choose **Add heat** or press Enter. The forge holds up to 100 heat. Invalid input leaves the forge unchanged and shows a message in the workshop log.
2. Choose **Make sword** to spend 30 heat and craft one sword. If the forge has less than 30 heat, the log tells you how much heat you need.
3. Choose **Reset forge** to return to 20 heat and zero swords and clear the input and log. Reloading the page starts the game in the same state.

| Heat | Forge status | Can craft? |
| --- | --- | --- |
| 0–29 | Too cold | No |
| 30–69 | Ready to forge | Yes |
| 70–100 | Roaring fire | Yes |

The heat form checks the input before calling `heatForge(amount)`. The other buttons call `makeSword()` and `resetForge()` directly. Each action calls `updateForge()` to display the heat and sword count and match the status text, CSS class, and illustration to the current heat.
