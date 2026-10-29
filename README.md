# BMI Calculator with Figma MCP

This project demonstrates a BMI Calculator built using Figma MCP. The design was provided to Figma MCP, which generated the component structure accurately and efficiently.


## Figma MCP Integration

connect your chat assistant to Figma MCP to enable seamless integration and component generation:
[`https://mcp.figma.com/mcp`](https://mcp.figma.com/mcp) 


## Costs
 - Tokens used: 150 (Claude Sonnet 5.5)
 - Time taken: ~30 minutes
 - Fixes: minimal

        WOW!!! 

<img width="450" height="906" alt="image" src="https://github.com/user-attachments/assets/253f2278-29c3-4347-8fcc-56d0fc528eef" />

## Files Structure

```plaintext
bmi-calc/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── BmiScale.tsx
│   │   ├── CalculateButton.tsx
│   │   ├── Disclaimer.tsx
│   │   ├── Entrance.tsx
│   │   ├── GlitchStripe.tsx
│   │   ├── Header.tsx
│   │   ├── HudCard.tsx
│   │   ├── ResultPanel.tsx
│   │   └── StepperCard.tsx
│   ├── hooks/
│   │   ├── useBmi.ts
│   │   ├── useCounter.ts
│   │   └── useHoldRepeat.ts
│   ├── utils/
│   │   └── bmi.ts
│   ├── App.tsx
│   ├── index.css
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   ├── setupTests.js
│   └── theme.ts
├── package.json
├── README.md
└── tsconfig.json
```

## Features

- Accurate BMI calculation based on user input for weight and height.
- Stepper buttons for adjusting weight and height values.
- Real-time feedback on BMI category (Underweight, Normal, Overweight, Obese).
- Responsive design consistent with the original Figma design.
- Rapid development enabled by Figma MCP's generated component structure.
