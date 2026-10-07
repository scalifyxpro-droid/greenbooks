export interface NavSubItem {
  title: string;
  href: string;
}

export interface NavGroup {
  heading: string;
  items: NavSubItem[];
}

export interface NavDropdown {
  title: string;
  type: 'megamenu' | 'simple';
  groups?: NavGroup[];
  items?: NavSubItem[];
  width?: string;
}

export const MAIN_NAV_LINKS = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Contact", href: "/contact" },
  { title: "Blogs", href: "/blogs" },
];

export const DROPDOWN_MENUS: NavDropdown[] = [
  {
    title: "Taxation",
    type: "megamenu",
    width: "w-[900px]",
    groups: [
      {
        heading: "Corporate Tax",
        items: [
          { title: "Corporate Tax in UAE", href: "/taxation/corporate-tax-uae" },
          { title: "Corporate Tax Registration", href: "/taxation/corporate-tax-registration" },
          { title: "Corporate Tax Assessment", href: "/taxation/corporate-tax-assessment" },
          { title: "Foreign Tax Credit Advisory", href: "/taxation/foreign-tax-advisory" },
          { title: "Permanent Establishment Advisory", href: "/taxation/permanent-establishment-advisory" },
          { title: "Anti Abuse Regulations Advisory", href: "/taxation/anti-abuse-regulations" },
          { title: "Transfer Pricing Benchmarking", href: "/taxation/transfer-pricing" },
          { title: "Tax Residency Advisory", href: "/taxation/tax-residency-advisory" },
          { title: "Qualifying Public Benefit Entity Advisory", href: "/taxation/public-benefit-entity-advisory" },
          { title: "Qualifying Freezone Person Advisory", href: "/taxation/freezone-person-advisory" },
          { title: "Country by Country Reporting", href: "/taxation/cbcr-reporting" },
        ],
      },
      {
        heading: "Value Added Tax (VAT)",
        items: [
          { title: "VAT in UAE", href: "/taxation/vat-uae" },
          { title: "VAT Registration", href: "/taxation/vat-registration" },
          { title: "VAT Return Filing", href: "/taxation/vat-return-filing" },
          { title: "VAT Refund", href: "/taxation/vat-refund" },
          { title: "VAT Health Check", href: "/taxation/vat-health-check" },
          { title: "FTA Tax Audit Assistance", href: "/taxation/fta-tax-audit" },
        ],
      },
      {
        heading: "Excise Tax",
        items: [
          { title: "Excise Tax in UAE", href: "/taxation/excise-tax-uae" },
          { title: "Excise Goods Business Setup Advisory", href: "/taxation/excise-business-setup-advisory" },
          { title: "Excise Registration", href: "/taxation/excise-registration" },
          { title: "Excise Product Registration", href: "/taxation/excise-product-registration" },
          { title: "Designated Zone / Warehouse Keeper Registration", href: "/taxation/warehouse-registration" },
          { title: "Excise Tax Compliance Review", href: "/taxation/excise-tax-compliance" },
          { title: "Voluntary Disclosure", href: "/taxation/voluntary-disclosure" },
        ],
      },
    ],
  },
  {
    title: "Accounting",
    type: "simple",
    items: [
      { title: "Accounting & Bookkeeping Service", href: "/accounting/accounting-bookkeeping" },
      { title: "Outsourced CFO Service", href: "/accounting/outsourced-cfo" },
      { title: "Backlog Accounting", href: "/accounting/backlog-accounting" },
      { title: "IFRS Implementation", href: "/accounting/ifrs-implementation" },
      { title: "Bank Reconciliation", href: "/accounting/bank-reconciliation" },
    ],
  },
  {
    title: "Assurance",
    type: "simple",
    items: [
      { title: "External Audit Service", href: "/assurance/external-audit" },
      { title: "Internal Audit Service", href: "/assurance/internal-audit" },
      { title: "Forensic Audit Service", href: "/assurance/forensic-audit" },
      { title: "Inventory Audit Service", href: "/assurance/inventory-audit" },
      { title: "Asset Verification Service", href: "/assurance/asset-verification" },
    ],
  },
  {
    title: "Business Setup & Advisory",
    type: "megamenu",
    width: "w-[620px]",
    groups: [
      {
        heading: "Free Zones",
        items: [
          { title: "Business Setup in Freezone", href: "/business-setup/freezone-overview" },
          { title: "Business Setup in UAE Mainland", href: "/business-setup/mainland-overview" },
          { title: "Pro Services", href: "/services/pro-services" },
          { title: "Golden Visa", href: "/services/golden-visa-uae" },
        ],
      },
      {
        heading: "Advisory",
        items: [
          { title: "Anti Money Laundering (AML)", href: "/services/aml" },
          { title: "Economic Substance Regulations", href: "/services/esr" },
          { title: "Ultimate Beneficial Ownership", href: "/services/ubo" },
        ],
      },
      {
        heading: "Strategy",
        items: [
          { title: "Business Plan", href: "/start-a-business" },
          { title: "Feasibility Study", href: "/guides" },
          { title: "Business Valuation", href: "/trade-license" },
        ],
      },
    ],
  },
  {
    title: "Certification & Software",
    type: "megamenu",
    width: "w-[500px]",
    groups: [
      {
        heading: "Certification",
        items: [
          { title: "ICV Certification", href: "/services/icv-certification" },
          { title: "ISO Certification", href: "/services/iso-certification" },
        ],
      },
      {
        heading: "Software",
        items: [
          { title: "Zoho Books", href: "/services/zoho-books" },
          { title: "AML Diligence", href: "/services/aml-diligence" },
        ],
      },
    ],
  },
];
