---
layout: post
title: First Year Diagram of Masters Coursework
cytoscape: true
---

<style>
p, li {
    font-family: "Times New Roman", Times, serif; 
    font-size: 1em;       
    line-height: 1.5em;   
}
#cy-test {
  width: 100vw !important;
  height: 1200px;
  margin-left: calc(50% - 50vw);
}
</style>

Over the first two semesters at TU Dortmund, I've taken the following classes: 
- Probability Theory
- Decision Theory
- Asymptotic Theory
- Econometrics
- Time Series Analysis 
- Advanced Business Cycles
- Industrial Organization
- Macroeconomics & Microeconomics

Here is my attempt at trying to map the major concepts. It's not at all exhaustive, and I've left out almost all of the economics. Here are some reasons to have made a graph like this: 
- Review concepts in preparation for future courses
- Identify which directions I'd like to learn more about
- Locate which concepts are more central for my studies 

<div id="cy-test" style="width: 100%; height: 1200px;"></div>

<script>
document.addEventListener("DOMContentLoaded", function () {
    const elements = [

        // ============================================================
        // NODES
        // ============================================================

        // ------------------------------------------------------------
        // CONCEPTUAL REGIONS
        // ------------------------------------------------------------

        { data: { id: "region_probability", label: "Probability Foundations", type: "region" } },

        { data: { id: "region_asymptotics", label: "Convergence & Asymptotic Theory", type: "region" } },

        { data: { id: "region_estimation", label: "Estimation & Econometrics", type: "region" } },

        { data: { id: "region_conditional", label: "Conditional Expectation & Geometry", type: "region" } },

        { data: { id: "region_inference", label: "Inference & Decision", type: "region" } },

        { data: { id: "region_game", label: "Game Theory", type: "region" } },

        { data: { id: "region_processes", label: "Stochastic Processes", type: "region" } },

        { data: { id: "region_approximation", label: "Optimization & Dynamic Methods", type: "region" } },


        // ------------------------------------------------------------
        // ESTIMATION & ECONOMETRICS
        // ------------------------------------------------------------

        { data: { id: "A", label: "Ordinary Least Squares", type: "core", parent: "region_estimation" } },
        { data: { id: "A2", label: "Estimators", parent: "region_estimation" } },
        { data: { id: "A3", label: "Maximum Likelihood Estimation", parent: "region_estimation" } },
        { data: { id: "G6", label: "Likelihood", parent: "region_estimation" } },
        { data: { id: "A3a", label: "Fisher Information", parent: "region_estimation" } },
        { data: { id: "A5", label: "Exogeneity", parent: "region_estimation" } },
        { data: { id: "A6", label: "Normal Equations", parent: "region_estimation" } },
        { data: { id: "A7", label: "ECDF & Plug-in Estimators", parent: "region_estimation" } },
        { data: { id: "A9", label: "Mahalanobis Distance", parent: "region_estimation" } },

        { data: { id: "B", label: "Extremum Estimators", type: "core", parent: "region_estimation" } },

        { data: { id: "F", label: "Generalized Method of Moments", type: "core", parent: "region_estimation" } },
        { data: { id: "F1", label: "Generalized Least Squares", parent: "region_estimation" } },
        { data: { id: "F2", label: "Multiple GMM", parent: "region_estimation" } },
        { data: { id: "F3", label: "Panel Fixed and Random Effects", parent: "region_estimation" } },
        { data: { id: "F4", label: "Instrumental Variables", parent: "region_estimation" } },


        // ------------------------------------------------------------
        // CONDITIONAL EXPECTATION & GEOMETRY
        // ------------------------------------------------------------

        { data: { id: "A4", label: "Hilbert Space of RVs", parent: "region_conditional" } },

        { data: { id: "I", label: "Conditional Expectations", type: "core", parent: "region_conditional" } },
        { data: { id: "I2", label: "Orthogonal Projections", parent: "region_conditional" } },
        { data: { id: "I3", label: "MSE", parent: "region_conditional" } },


        // ------------------------------------------------------------
        // PROBABILITY FOUNDATIONS
        // ------------------------------------------------------------

        { data: { id: "G", label: "Random Variables", type: "core", parent: "region_probability" } },
        { data: { id: "G13", label: "Probability Space", parent: "region_probability" } },
        { data: { id: "G13a", label: "Probability Measure", parent: "region_probability" } },
        { data: { id: "G13b", label: "Lebesgue Integration", parent: "region_probability" } },
        { data: { id: "G13c", label: "CDF", parent: "region_probability" } },
        { data: { id: "G13d", label: "Expected Values", parent: "region_probability" } },
        { data: { id: "G13e", label: "Sigma Algebra", parent: "region_probability" } },
        { data: { id: "G13h", label: "Filtrations", parent: "region_probability" } },
        { data: { id: "G13f", label: "PDF", parent: "region_probability" } },
        { data: { id: "G13g", label: "Sample Space", parent: "region_probability" } },


        // ------------------------------------------------------------
        // CONVERGENCE & ASYMPTOTIC THEORY
        // ------------------------------------------------------------

        { data: { id: "G2", label: "Convergence Types of RVs", parent: "region_asymptotics" } },
        { data: { id: "G3", label: "Convergence in Distribution", parent: "region_asymptotics" } },
        { data: { id: "G4", label: "Convergence in Probability", parent: "region_asymptotics" } },
        { data: { id: "G5", label: "Estimator Consistency", parent: "region_asymptotics" } },
        { data: { id: "G7", label: "Slutsky", parent: "region_asymptotics" } },
        { data: { id: "G8", label: "Continuous Mapping Theorem", parent: "region_asymptotics" } },
        { data: { id: "G9", label: "Strong Law of Large Numbers", parent: "region_asymptotics" } },
        { data: { id: "G10", label: "Monotone Convergence Theorem", parent: "region_asymptotics" } },
        { data: { id: "G11", label: "Weak Law of Large Numbers", parent: "region_asymptotics" } },
        { data: { id: "G12", label: "Almost Sure Convergence", parent: "region_asymptotics" } },
        { data: { id: "G14", label: "Dominated Convergence Theorem", parent: "region_asymptotics" } },
        { data: { id: "G15", label: "Big O in Probability", parent: "region_asymptotics" } },
        { data: { id: "G16", label: "Little o in Probability", parent: "region_asymptotics" } },
        { data: { id: "G17", label: "Big O", parent: "region_asymptotics" } },
        { data: { id: "G18", label: "Little o", parent: "region_asymptotics" } },
        { data: { id: "G19", label: "Glivenko-Cantelli", parent: "region_asymptotics" } },
        { data: { id: "G20", label: "Borel-Cantelli", parent: "region_asymptotics" } },
        { data: { id: "G21", label: "Characteristic Functions", parent: "region_asymptotics" } },

        { data: { id: "H", label: "Central Limit Theorems", type: "core", parent: "region_asymptotics" } },
        { data: { id: "H2", label: "Delta Method", parent: "region_asymptotics" } },
        { data: { id: "H3", label: "Lindeberg-Feller: Triangular Arrays", parent: "region_asymptotics" } },
        { data: { id: "H4", label: "Lindeberg-Levy: iid", parent: "region_asymptotics" } },
        { data: { id: "H5", label: "CLT for Linear Time Series Processes", parent: "region_asymptotics" } },
        { data: { id: "H6", label: "CLT for Martingale Difference Arrays", parent: "region_asymptotics" } },
        { data: { id: "H7", label: "Berry-Esseen", parent: "region_asymptotics" } },

        { data: { id: "A8", label: "Asymptotic Normality", parent: "region_asymptotics" } },


        // ------------------------------------------------------------
        // INFERENCE & DECISION
        // ------------------------------------------------------------

        { data: { id: "C", label: "Hypothesis Testing", type: "core", parent: "region_inference" } },
        { data: { id: "C2", label: "Neyman-Pearson for Simple Hypotheses", parent: "region_inference" } },
        { data: { id: "C3", label: "Decision Problems", parent: "region_inference" } },
        { data: { id: "C4", label: "Pivots", parent: "region_inference" } },
        { data: { id: "C5", label: "Wald / Score / Likelihood Ratio", parent: "region_inference" } },
        { data: { id: "C8", label: "Generalized Likelihood Ratio + Wilks", parent: "region_inference" } },
        { data: { id: "C9", label: "Decision Rules", parent: "region_inference" } },
        { data: { id: "C10", label: "Minimax", parent: "region_inference" } },
        { data: { id: "C11", label: "Bayes Rule", parent: "region_inference" } },
        { data: { id: "C12", label: "Admissibility", parent: "region_inference" } },
        { data: { id: "C13", label: "James-Stein Paradox", parent: "region_inference" } },
        { data: { id: "C14", label: "Loss Functions", parent: "region_inference" } },
        { data: { id: "C15", label: "Test Inversion & Confidence Sets", parent: "region_inference" } },


        // ------------------------------------------------------------
        // GAME THEORY
        // ------------------------------------------------------------

        { data: { id: "C6", label: "Game Theory", type: "core", parent: "region_game" } },
        { data: { id: "C7", label: "Oligopoly Models", parent: "region_game" } },


        // ------------------------------------------------------------
        // STOCHASTIC PROCESSES
        // ------------------------------------------------------------

        { data: { id: "D", label: "Univariate Discrete Stochastic Processes", type: "core", parent: "region_processes" } },
        { data: { id: "D2", label: "ARMA Linear Models", parent: "region_processes" } },
        { data: { id: "D3", label: "Spectral Representation", parent: "region_processes" } },
        { data: { id: "D4", label: "Linear Filters", parent: "region_processes" } },


        // ------------------------------------------------------------
        // OPTIMIZATION & DYNAMIC METHODS
        // ------------------------------------------------------------

        { data: { id: "E", label: "Finite Difference Equations", type: "core", parent: "region_approximation" } },
        { data: { id: "E2", label: "Linear Approximations & Taylor Expansions", parent: "region_approximation" } },
        { data: { id: "E3", label: "Deterministic Convergence", parent: "region_approximation" } },
        { data: { id: "E4", label: "Optimization", parent: "region_approximation" } },
        { data: { id: "E5", label: "Lagrangian Optimization", parent: "region_approximation" } },
        { data: { id: "E6", label: "Consumer Theory", parent: "region_approximation" } },
        { data: { id: "E7", label: "Business Cycle First Order Conditions", parent: "region_approximation" } },


        // ============================================================
        // EDGES
        // ============================================================

        { data: { source: "A2", target: "A" } },
        { data: { source: "A2", target: "A3" } },
        { data: { source: "A3", target: "A3a" } },
        { data: { source: "A8", target: "A3a" } },
        { data: { source: "A5", target: "A" } },
        { data: { source: "A", target: "A6" } },
        { data: { source: "A2", target: "A7" } },
        { data: { source: "A", target: "A8" } },
        { data: { source: "A", target: "A9" } },

        { data: { source: "A2", target: "B" } },
        { data: { source: "B", target: "A3" } },
        { data: { source: "B", target: "F" } },

        { data: { source: "C", target: "C2" } },
        { data: { source: "C3", target: "C" } },
        { data: { source: "C", target: "C4" } },
        { data: { source: "A8", target: "C4" } },
        { data: { source: "C", target: "C5" } },
        { data: { source: "C6", target: "C3" } },
        { data: { source: "C6", target: "C7" } },
        { data: { source: "C", target: "C8" } },
        { data: { source: "A8", target: "C8" } },
        { data: { source: "C", target: "C9" } },
        { data: { source: "C9", target: "C10" } },
        { data: { source: "C9", target: "C11" } },
        { data: { source: "C9", target: "C12" } },
        { data: { source: "C9", target: "C13" } },
        { data: { source: "C3", target: "C14" }},
        { data: { source: "C", target: "C15" }},

        { data: { source: "D", target: "D2" } },
        { data: { source: "D", target: "D3" } },
        { data: { source: "D2", target: "D4" } },
        { data: { source: "D3", target: "D4" } },

        { data: { source: "E", target: "E2" } },
        { data: { source: "E4", target: "E5" } },
        { data: { source: "E5", target: "E6" } },
        { data: { source: "E", target: "E7" } },
        { data: { source: "E5", target: "E7" } },

        { data: { source: "F", target: "F1" } },
        { data: { source: "F1", target: "A" } },
        { data: { source: "F2", target: "F" } },
        { data: { source: "F2", target: "F3" } },
        { data: { source: "F", target: "F4" } },
        { data: { source: "F4", target: "A5" } },

        { data: { source: "G", target: "G2" } },
        { data: { source: "G2", target: "G3" } },
        { data: { source: "G2", target: "G4" } },
        { data: { source: "G4", target: "G5" } },
        { data: { source: "A2", target: "G5" } },
        { data: { source: "G6", target: "C5" } },
        { data: { source: "G6", target: "A3" } },
        { data: { source: "G3", target: "G7" } },
        { data: { source: "G4", target: "G7" } },
        { data: { source: "G2", target: "G8" } },
        { data: { source: "G8", target: "G7" } },
        { data: { source: "G4", target: "G10" } },
        { data: { source: "G4", target: "G11" } },
        { data: { source: "G11", target: "G5" } },
        { data: { source: "G8", target: "G5" } },
        { data: { source: "G2", target: "G12" } },
        { data: { source: "G12", target: "G9" } },

        { data: { source: "G13a", target: "G13" } },
        { data: { source: "G13a", target: "G13b" } },
        { data: { source: "G13c", target: "A7" } },
        { data: { source: "G13b", target: "G13d" } },
        { data: { source: "G13d", target: "G10" } },
        { data: { source: "G13e", target: "G13" } },
        { data: { source: "G13e", target: "G13a" } },
        { data: { source: "G13e", target: "G13h" } },
        { data: { source: "G13f", target: "G13c" } },
        { data: { source: "G13f", target: "G6" } },
        { data: { source: "G13", target: "G" } },
        { data: { source: "G13g", target: "G13e" } },
        { data: { source: "G13g", target: "G13" } },

        { data: { source: "G2", target: "G14" } },
        { data: { source: "G17", target: "G15" } },
        { data: { source: "G4", target: "G16" } },
        { data: { source: "G18", target: "G16" } },
        { data: { source: "E3", target: "G17" } },
        { data: { source: "E2", target: "G17" } },
        { data: { source: "E3", target: "G18" } },
        { data: { source: "E2", target: "G18" } },
        { data: { source: "G19", target: "A7" } },
        { data: { source: "G20", target: "G9" } },
        { data: { source: "G9", target: "G19" } },
        { data: { source: "G21", target: "H4" } },
        { data: { source: "G", target: "G21" } },

        { data: { source: "G3", target: "H" } },
        { data: { source: "H", target: "A8" } },
        { data: { source: "H", target: "H2" } },
        { data: { source: "H", target: "H3" } },
        { data: { source: "H", target: "H4" } },
        { data: { source: "E2", target: "H4" } },
        { data: { source: "H", target: "H5" } },
        { data: { source: "H", target: "H6" } },
        { data: { source: "H", target: "H7" } },
        { data: { source: "D", target: "H5" } },
        { data: { source: "G13h", target: "H6" } },

        { data: { source: "I", target: "A4" } },
        { data: { source: "G13d", target: "I" } },
        { data: { source: "G13e", target: "I" } },
        { data: { source: "A4", target: "I2" } },
        { data: { source: "I2", target: "A" } },
        { data: { source: "I", target: "I3" } },
        { data: { source: "G7", target: "A8" } },
        { data: { source: "C14", target: "I3" } }
    ];

  // ============================================================
  // CYTOSCAPE
  // ============================================================

  const cy = cytoscape({

    container: document.getElementById("cy-test"),

    elements: elements,

    style: [

      // Normal nodes
      {
        selector: "node",
        style: {
            "label": "data(label)",
            "text-wrap": "wrap",
            "text-max-width": "110px",
            "text-valign": "center",
            "text-halign": "center",

            "shape": "roundrectangle",

            "background-color": "#ffffff",
            "border-width": 1,
            "border-color": "#777",

            "font-size": "11px",

            "width": 120,
            "height": 38,
            "padding": "5px"
        }
        },

      // Main course/concept nodes
      {
        selector: 'node[type="core"]',
        style: {
          "shape": "ellipse",
          "background-color": "#eeeeee",
          "border-width": 2,
          "font-size": "15px",
          "font-weight": "bold",
          "padding": "15px"
        }
      },

      {
        selector: 'node[type="region"]',
        style: {
            "label": "data(label)",
            "shape": "roundrectangle",

            "background-color": "#f5f5f5",
            "background-opacity": 0.55,

            "border-width": 1.5,
            "border-color": "#999",
            "border-opacity": 0.7,

            "padding": 25,

            /* Region title */
            "font-size": 18,
            "font-weight": "bold",
            "text-wrap": "none",
            "text-max-width": "none",
            "color": "#555",

            "text-valign": "top",
            "text-halign": "center",
            "text-margin-y": -12,

            "compound-sizing-wrt-labels": "exclude"
        }
        },

        {
        selector: "#region_probability",
        style: {
            "background-color": "#dbeafe",
            "border-color": "#4b5d72",
            "color": "#2563eb"
        }
        },
        {
        selector: "#region_asymptotics",
        style: {
            "background-color": "#ede9fe",
            "border-color": "#8b5cf6",
            "color": "#6d28d9",
        }
        },
        {
        selector: "#region_estimation",
        style: {
            "background-color": "#dcfce7",
            "border-color": "#4ade80",
            "color": "#15803d",
        }
        },
        {
        selector: "#region_conditional",
        style: {
            "background-color": "#fef3c7",
            "border-color": "#f59e0b",
            "color": "#b45309"
        }
        },
        {
        selector: "#region_inference",
        style: {
            "background-color": "#ffedd5",
            "border-color": "#fb923c",
            "color": "#c2410c"
        }
        },
        {
        selector: "#region_game",
        style: {
            "background-color": "#fee2e2",
            "border-color": "#f87171",
            "color": "#b91c1c"
        }
        },
        {
        selector: "#region_processes",
        style: {
            "background-color": "#ccfbf1",
            "border-color": "#2dd4bf",
            "color": "#0f766e"
        }
        },
        {
        selector: "#region_approximation",
        style: {
            "background-color": "#e5e7eb",
            "border-color": "#9ca3af",
            "color": "#4b5563"
        }
        },

      // Edges
      {
        selector: "edge",
        style: {
            "display": "element",
            "visibility": "visible",
            "opacity": 1,
            "width": 3,
            "line-color": "#555",
            "line-opacity": 1,
            "target-arrow-color": "#555",
            "target-arrow-shape": "triangle",
            "arrow-scale": 1.2,
            "curve-style": "bezier"
        }
        }
    ],

    layout: {
    name: "fcose",

    nodeRepulsion: 20000,
    idealEdgeLength: 250,
    edgeElasticity: 0.25,
    nodeSeparation: 150,

    randomize: true,
    numIter: 3000,

    fit: true,
    padding: 80
    }
  });

    });


</script>

