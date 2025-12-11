'use client';

import CollapsibleSection from './CollapsibleSection';

export default function ReferencesSection() {
  return (
    <CollapsibleSection title="References" defaultOpen={false}>
      <div className="text-sm text-foreground-secondary space-y-3">
        <p>
          Bregman, R. (2017). <em>Utopia for Realists: How We Can Build the Ideal World</em>. Bloomsbury Publishing.
        </p>
        <p>
          Forget, E. L. (2011). The town with no poverty: The health effects of a Canadian guaranteed annual income field experiment. <em>Canadian Public Policy</em>, 37(3), 283–305. https://doi.org/10.3138/cpp.37.3.283
        </p>
        <p>
          Haushofer, J., & Shapiro, J. (2016). The short-term impact of unconditional cash transfers to the poor: Experimental evidence from Kenya. <em>Quarterly Journal of Economics</em>, 131(4), 1973–2042. https://doi.org/10.1093/qje/qjw025
        </p>
        <p>
          Kremer, M., & Miguel, E. (2007). The illusion of sustainability. <em>Quarterly Journal of Economics</em>, 122(3), 1007–1065. https://doi.org/10.1162/qjec.122.3.1007
        </p>
        <p>
          Miguel, E., & Kremer, M. (2004). Worms: Identifying impacts on education and health in the presence of treatment externalities. <em>Econometrica</em>, 72(1), 159–217. https://doi.org/10.1111/j.1468-0262.2004.00481.x
        </p>
        <p>
          Mullainathan, S., & Shafir, E. (2013). <em>Scarcity: Why having too little means so much</em>. Times Books.
        </p>
        <p>
          Robins, P. K. (1985). A comparison of the labor supply findings from the four negative income tax experiments. <em>Journal of Human Resources</em>, 20(4), 567–582. https://doi.org/10.2307/145683
        </p>
        <p>
          Tsemberis, S., Gulcur, L., & Nakae, M. (2004). Housing first, consumer choice, and harm reduction for homeless individuals with a dual diagnosis. <em>American Journal of Public Health</em>, 94(4), 651–656. https://doi.org/10.2105/ajph.94.4.651
        </p>
        <p>
          Wolf, J. R. L. M., Ros, W. J. G., Becker, A. E., Stijger, P., & De Graaf, P. (2010). Epidemiology and care for homeless people in the Netherlands: Implications for the Housing First approach. <em>European Journal of Homelessness</em>, 4, 99–110.
        </p>
        <p>
          World Bank. (2024). <em>World Development Indicators</em>. World Bank. https://databank.worldbank.org/source/world-development-indicators
        </p>
      </div>
    </CollapsibleSection>
  );
}

