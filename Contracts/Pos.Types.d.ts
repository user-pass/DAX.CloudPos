declare module Commerce.Proxy.Entities {
    enum AutoExitMethodType {
        Logoff = 0,
        Lock = 1,
        None = -1
    }
    enum PublishingAction {
        None = 0,
        Publish = 1,
        Delete = 2,
        Expire = 3
    }
    enum ListingPublishingActionStatus {
        None = 0,
        Ready = 1,
        InProgress = 2,
        Done = 3,
        Failed = 4
    }
    enum AttributeDataType {
        None = 0,
        Currency = 1,
        DateTime = 2,
        Decimal = 3,
        Integer = 4,
        Text = 5,
        TrueFalse = 6,
        Video = 40,
        Image = 41
    }
    enum OnlineChannelPublishStatusType {
        None = 0,
        Draft = 1,
        InProgress = 2,
        Published = 3,
        Failed = 4
    }
    enum ReceiptTransactionType {
        None = 0,
        Sale = 1,
        Return = 2,
        Payment = 5,
        SalesOrder = 6,
        Quote = 7,
        SuspendedTransaction = 9
    }
    enum EmployeePriceOverrideType {
        HigherAndLower = 0,
        HigherOnly = 1,
        LowerOnly = 2,
        NotAllowed = 3
    }
    enum KeyInPriceRestriction {
        None = 0,
        NewPrice = 1,
        HigherOrEqualPrice = 2,
        LowerOrEqualPrice = 3,
        NotAllowed = 4
    }
    enum KeyInQuantityRestriction {
        None = 0,
        Required = 1,
        NotAllowed = 2
    }
    enum ProductDimensionType {
        None = 0,
        Color = 1,
        Configuration = 2,
        Size = 3,
        Style = 4
    }
    enum ProductType {
        None = 0,
        KitMaster = 1,
        KitVariant = 2,
        Master = 3,
        Standalone = 4,
        Variant = 5
    }
    enum NumberSequenceSeedType {
        None = 0,
        ReceiptDefault = 1,
        ReceiptSale = 2,
        ReceiptReturn = 3,
        ReceiptSalesOrder = 4,
        ReceiptSalesInvoice = 5,
        ReceiptPayment = 6,
        BatchId = 7,
        TransactionId = 8,
        ReceiptCustomerSalesOrder = 10,
        ReceiptCustomerQuote = 11
    }
    enum ReasonCodeSourceType {
        None = 0,
        AddSalesperson = 1,
        EndOfTransaction = 2,
        ItemDiscount = 3,
        ItemNotOnFile = 4,
        LineItemTaxChange = 5,
        Markup = 6,
        NegativeAdjustment = 7,
        NfcEContingencyModeEnabled = 8,
        NfcEVoided = 9,
        OpenDrawer = 10,
        OverridePrice = 11,
        ReturnItem = 12,
        ReturnTransaction = 13,
        SerialNumber = 14,
        StartOfTransaction = 15,
        TenderDeclaration = 16,
        TotalDiscount = 17,
        TransactionTaxChange = 18,
        VoidItem = 19,
        VoidPayment = 20,
        VoidTransaction = 21,
        OrderFulfillment = 22,
        ManualCharge = 23
    }
    enum TriggerFunctionType {
        None = 0,
        Item = 1,
        InfoCode = 2
    }
    enum QueryType {
        None = 0,
        NameAndDescription = 1,
        AotObject = 2
    }
    enum ChangeAction {
        None = 0,
        Insert = 1,
        Update = 2,
        Delete = 3
    }
    enum PeriodicDiscountOfferType {
        MultipleBuy = 0,
        MixAndMatch = 1,
        Offer = 2,
        Promotion = 3,
        Threshold = 4,
        LeastExpensiveFavorRetailer = 5,
        OfferLineQuantityLimit = 6
    }
    enum SearchFilterType {
        None = 0,
        Text = 1
    }
    enum InfoCodeActivity {
        Transaction = 0,
        OrderFulfillment = 1
    }
    enum SrsReportFileFormat {
        CSV = 0,
        Excel = 1,
        HTML4_0 = 2,
        Image = 3,
        MHTML = 4,
        PDF = 5,
        XML = 6
    }
    enum ShiftReconciliationLineStatus {
        None = 0,
        Pending = 1,
        Reconciled = 2,
        Closed = 3
    }
    enum AddressType {
        None = 0,
        Invoice = 1,
        Delivery = 2,
        AltDlv = 3,
        SWIFT = 4,
        Payment = 5,
        Service = 6,
        Home = 7,
        Other = 8,
        Business = 9,
        RemitTo = 10,
        ShipCarrierThirdPartyShipping = 11,
        Statement = 12,
        FixedAsset = 15,
        Onetime = 16,
        Recruit = 17,
        SMS = 18,
        Lading_W = 101,
        Unlading_W = 102,
        Consignment_IN = 103
    }
    enum BarcodeEntryMethodType {
        SingleScanned = 0,
        MultipleScanned = 1,
        ManuallyEntered = 2,
        Selected = 3
    }
    enum BarcodeMaskType {
        None = 0,
        Item = 1,
        Customer = 2,
        Employee = 3,
        Coupon = 4,
        DataEntry = 5,
        Salesperson = 6,
        Pharmacy = 7,
        DiscountCode = 8,
        GiftCard = 9,
        LoyaltyCard = 10
    }
    enum TransactionStatus {
        Normal = 0,
        Voided = 1,
        Posted = 2,
        Concluded = 3,
        Canceled = 4,
        OnHold = 5,
        Training = 6,
        Aborted = 7
    }
    enum SalesStatus {
        Unknown = 0,
        Created = 1,
        Processing = 2,
        Delivered = 3,
        Invoiced = 4,
        Confirmed = 5,
        Sent = 6,
        Canceled = 7,
        Lost = 8
    }
    enum GiftCardOperationType {
        None = 0,
        Issue = 1,
        AddTo = 2,
        CashOut = 3
    }
    enum DiscountLineType {
        None = 0,
        CustomerDiscount = 1,
        PeriodicDiscount = 2,
        ManualDiscount = 3,
        LoyaltyDiscount = 4
    }
    enum ManualDiscountType {
        None = 0,
        LineDiscountAmount = 1,
        LineDiscountPercent = 2,
        TotalDiscountAmount = 3,
        TotalDiscountPercent = 4
    }
    enum CustomerDiscountType {
        None = 0,
        LineDiscount = 1,
        MultilineDiscount = 2,
        TotalDiscount = 3
    }
    enum ConcurrencyMode {
        Exclusive = 0,
        BestPrice = 1,
        Compounded = 2
    }
    enum ReasonCodeInputType {
        None = 0,
        SubCode = 1,
        Date = 2,
        Numeric = 3,
        Item = 4,
        Customer = 5,
        Staff = 6,
        Text = 9,
        SubCodeButtons = 10,
        AgeLimit = 11,
        CompositeSubCodes = 12
    }
    enum ReasonCodeLineType {
        Header = 0,
        Sales = 1,
        Payment = 2,
        IncomeExpense = 3,
        NoSale = 4,
        Affiliation = 5,
        Fiscal = 6
    }
    enum ChargeModule {
        None = 0,
        Sales = 1,
        Retail = 3
    }
    enum ChargeType {
        ManualCharge = 0,
        PriceCharge = 1,
        AutoCharge = 2
    }
    enum ChargeMethod {
        Fixed = 0,
        Pieces = 1,
        Percent = 2,
        InterCompanyPercent = 3,
        External = 4,
        Proportional = 5
    }
    enum CardType {
        InternationalCreditCard = 0,
        InternationalDebitCard = 1,
        LoyaltyCard = 2,
        CorporateCard = 3,
        CustomerCard = 4,
        EmployeeCard = 5,
        SalespersonCard = 6,
        GiftCard = 7,
        Unknown = -1
    }
    enum CashType {
        Coin = 0,
        Note = 1
    }
    enum IncomeExpenseAccountType {
        Income = 0,
        Expense = 1,
        None = -1
    }
    enum TenderLineStatus {
        None = 0,
        NotProcessed = 1,
        PendingCommit = 2,
        Voided = 3,
        Committed = 4,
        Historical = 5
    }
    enum TenderLineVoidStatus {
        None = 0,
        NormalVoid = 1,
        ForceVoided = 2,
        ForceVoidReconciled = 3
    }
    enum PaymentProcessingType {
        Immediate = 0,
        Deferred = 1
    }
    enum CreditCardProcessorStatus {
        NA = 0,
        Approved = 1,
        Declined = 2,
        Error = 3
    }
    enum ContactInformationType {
        None = 0,
        Phone = 1,
        Email = 2,
        Url = 3,
        Telex = 4,
        Fax = 5,
        CellularPhone = 6
    }
    enum CommerceEntityDataLevel {
        Identity = 0,
        Minimal = 1,
        Standard = 2,
        Extended = 3,
        Complete = 4
    }
    enum TransactionType {
        LogOff = 0,
        LogOn = 1,
        Sales = 2,
        Payment = 3,
        RemoveTender = 4,
        FloatEntry = 5,
        ChangeTender = 6,
        TenderDeclaration = 7,
        OpenDrawer = 9,
        SalesOrder = 14,
        SalesInvoice = 15,
        BankDrop = 16,
        SafeDrop = 17,
        IncomeExpense = 18,
        CustomerOrder = 19,
        StartingAmount = 20,
        SuspendShift = 21,
        BlindCloseShift = 22,
        CloseShift = 23,
        PrintX = 24,
        PrintZ = 25,
        PendingSalesOrder = 27,
        KitDisassembly = 28,
        AsyncCustomerQuote = 31,
        AsyncCustomerOrder = 33,
        ForceDeleteShift = 34,
        GiftCardInquiry = 35,
        SuspendedTransaction = 36,
        None = -1
    }
    enum CashManagementTransactionContext {
        Unknown = 0,
        Shift = 1,
        Safe = 2,
        Bank = 3
    }
    enum EmployeePermissionsAllowPrintingReceiptCopy {
        Always = 0,
        OnlyOnce = 1,
        OnlyOnceHqAvailable = 2,
        Never = 3
    }
    enum AddressFormatLineType {
        None = 0,
        ZipCode = 1,
        City = 2,
        County = 3,
        State = 4,
        CountryRegion = 5,
        StreetName = 6,
        District = 7,
        StreetNumber = 8,
        BuildingCompliment = 9,
        Postbox = 10,
        House_RU = 21,
        Flat_RU = 22,
        CountryOKSMCode_RU = 23
    }
    enum StatementMethod {
        Staff = 0,
        PosTerminal = 1,
        Total = 2,
        None = -1
    }
    enum SalesRepPromptType {
        NoPrompt = 0,
        PromptOnCartCreation = 1,
        PromptOnCartLineCreation = 2,
        None = -1
    }
    enum RetailProductSearchType {
        MatchAnySearchTerms = 0,
        MatchAllSearchTerms = 1
    }
    enum RetailDenominationsToDisplay {
        GreaterOrEqualToAmountDue = 0,
        AllDenominations = 1
    }
    enum EmployeeLogonType {
        RetailIdentityProvider = 0,
        AzureActiveDirectory = 1
    }
    enum DeviceActivationStatus {
        Pending = 0,
        Activated = 1,
        Deactivated = 2,
        Disabled = 3,
        None = -1
    }
    enum DeviceType {
        None = 0,
        OPOS = 1,
        WindowsPrinter = 2,
        Network = 3
    }
    enum DualDisplayType {
        Logo = 0,
        ImageRotator = 1,
        WebBrowser = 2,
        None = -1
    }
    enum FiscalRegisterType {
        None = 0,
        Manufacturer = 1
    }
    enum PrinterLogotype {
        None = 0,
        Download = 1,
        EpsonFlash = 2
    }
    enum PrinterLogoAlignmentType {
        Left = 0,
        Center = 1,
        Right = 2,
        None = -1
    }
    enum FiscalIntegrationConnectorType {
        Local = 0,
        External = 1,
        Internal = 2
    }
    enum ReceiptType {
        Unknown = 0,
        SalesReceipt = 1,
        CardReceiptForShop = 2,
        CardReceiptForCustomer = 3,
        CardReceiptForShopReturn = 4,
        CardReceiptForCustomerReturn = 5,
        CustomerAccountReceiptForShop = 7,
        CustomerAccountReceiptForCustomer = 8,
        CustomerAccountReceiptForShopReturn = 9,
        CustomerAccountReceiptForCustomerReturn = 10,
        CustomerAccountDeposit = 14,
        CreditMemo = 15,
        SalesOrderReceipt = 18,
        GiftCertificate = 20,
        QuotationReceipt = 21,
        PackingSlip = 22,
        PickupReceipt = 23,
        XReport = 24,
        ZReport = 25,
        SafeDrop = 26,
        BankDrop = 27,
        TenderDeclaration = 28,
        RemoveTender = 29,
        FloatEntry = 30,
        StartingAmount = 31,
        OrderSummaryReceipt = 32,
        GiftReceipt = 33,
        ReturnLabel = 34,
        EFDocDANFESimplified = 35,
        EFDocDANFEDetailed = 36,
        PickingList = 37,
        OpenDrawer = 38,
        SuspendedTransaction = 39,
        GiftCardInquiry = 40,
        CardTerminationReceiptForShop = 41,
        CardTerminationReceiptForCustomer = 42,
        CustomReceipt1 = 101,
        CustomReceipt2 = 102,
        CustomReceipt3 = 103,
        CustomReceipt4 = 104,
        CustomReceipt5 = 105,
        CustomReceipt6 = 106,
        CustomReceipt7 = 107,
        CustomReceipt8 = 108,
        CustomReceipt9 = 109,
        CustomReceipt10 = 110,
        CustomReceipt11 = 111,
        CustomReceipt12 = 112,
        CustomReceipt13 = 113,
        CustomReceipt14 = 114,
        CustomReceipt15 = 115,
        CustomReceipt16 = 116,
        CustomReceipt17 = 117,
        CustomReceipt18 = 118,
        CustomReceipt19 = 119,
        CustomReceipt20 = 120
    }
    enum PrintBehavior {
        Always = 0,
        Never = 1,
        Prompt = 2,
        AsRequired = 3
    }
    enum ProductPropertyType {
        None = 0,
        Currency = 1,
        DateTime = 2,
        Decimal = 3,
        Integer = 4,
        Text = 5,
        Boolean = 6,
        Video = 40,
        Image = 41
    }
    enum AttributeGroupType {
        Default = 0,
        Specification = 1
    }
    enum ProductSource {
        None = 0,
        Local = 1,
        Remote = 2
    }
    enum RoundingMethod {
        None = 0,
        Nearest = 1,
        Up = 2,
        Down = 3
    }
    enum PriceMethod {
        None = 0,
        Fixed = 1,
        AmountOff = 2,
        PercentOff = 3
    }
    enum LineMultilineDiscountOnItem {
        None = 0,
        Line = 1,
        Multiline = 2,
        Both = 3
    }
    enum LoyaltyRewardPointEntryType {
        None = 0,
        Earn = 1,
        Redeem = 2,
        ReturnEarned = 3,
        Adjust = 4,
        Refund = 5
    }
    enum LoyaltyRewardPointType {
        None = 0,
        Quantity = 1,
        Amount = 2
    }
    enum DistanceUnit {
        Miles = 0,
        Kilometers = 1
    }
    enum StockCountStatus {
        Unchanged = 0,
        PendingUpdate = 1
    }
    enum CommerceListInvitationStatus {
        None = 0,
        Pending = 1,
        Accepted = 2
    }
    enum CommerceListInvitationType {
        None = 0,
        Public = 1,
        Email = 2
    }
    enum SearchLocation {
        None = 0,
        Local = 1,
        Remote = 2,
        All = 3
    }
    enum OrderSearchType {
        None = 0,
        SalesOrder = 1,
        SalesTransaction = 2,
        ConsolidateOrder = 3
    }
    enum SalesTransactionType {
        Sales = 2,
        CustomerAccountDeposit = 3,
        SalesInvoice = 15,
        IncomeExpense = 18,
        CustomerOrder = 19,
        PendingSalesOrder = 27,
        AsyncCustomerQuote = 31,
        AsyncCustomerOrder = 33,
        SuspendedSalesTransaction = 36,
        None = -1
    }
    enum RetailAffiliationType {
        General = 0,
        Loyalty = 1,
        Unknown = -1
    }
    enum ProductRefinerSource {
        None = 0,
        Attribute = 1,
        Category = 2,
        Price = 3
    }
    enum RefinerType {
        SingleSelect = 0,
        MultiSelect = 1
    }
    enum DisplayTemplate {
        List = 0,
        Slider = 1,
        SliderWithBars = 2,
        Range = 3
    }
    enum LoyaltyCardTenderType {
        AsCardTender = 0,
        AsContactTender = 1,
        NoTender = 2,
        Blocked = 3
    }
    enum RetailChannelType {
        RetailStore = 0,
        OnlineStore = 1,
        OnlineMarketplace = 2,
        SharePointOnlineStore = 3,
        None = -1
    }
    enum LogOnConfiguration {
        LocalDatabase = 0,
        RealTimeService = 1
    }
    enum TransactionServiceAuthenticationType {
        CertificateAuthentication = 0,
        ServiceToServiceAuthentication = 1,
        AdfsServiceToServiceClientSecretAuthentication = 2
    }
    enum EmployeeActivityType {
        ClockIn = 0,
        JobStop = 1,
        JobStart = 2,
        TeamStop = 3,
        TeamStart = 4,
        BreakFlowStart = 5,
        BreakCancelOne = 6,
        BreakCancelAll = 7,
        BreakFlowStop = 8,
        FinishQuantity = 9,
        ClockOut = 10,
        EventCode = 11,
        BreakFromWork = 12,
        BreakForLunch = 13,
        Logbook = 14,
        None = -1
    }
    enum DeliveryPreferenceType {
        None = 0,
        ShipToAddress = 1,
        PickupFromStore = 2,
        ElectronicDelivery = 3,
        DeliverItemsIndividually = 4
    }
    enum LayoutType {
        None = 0,
        ModernPosCompact = 1,
        ModernPosFull = 2,
        Epos = 3
    }
    enum SalesInvoiceType {
        Journal = 0,
        Quotation = 1,
        Subscription = 2,
        Sales = 3,
        ReturnItem = 4,
        Blanket = 5,
        ItemRequirements = 6
    }
    enum InvoiceType {
        None = 0,
        SalesOrderInvoice = 1,
        FreeTextInvoice = 2,
        ProjectInvoice = 3,
        CreditNoteInvoice = 4,
        FreeTextCreditNoteInvoice = 5,
        ProjectCreditNoteInvoice = 6
    }
    enum TaxOverrideType {
        ItemSalesTaxGroup = 0,
        SalesTaxGroup = 1,
        None = -1
    }
    enum TaxOverrideBy {
        Line = 0,
        Cart = 1,
        None = -1
    }
    enum RetailOperation {
        None = 0,
        ItemSale = 100,
        PriceCheck = 101,
        VoidItem = 102,
        ItemComment = 103,
        PriceOverride = 104,
        SetQuantity = 105,
        ClearQuantity = 106,
        ItemSearch = 108,
        ReturnItem = 109,
        WeighItem = 110,
        LinkedItemsAdd = 112,
        SetDimensions = 113,
        ReturnTransaction = 114,
        ShowJournal = 115,
        SetCostPrice = 116,
        LoyaltyRequest = 117,
        ProcessInput = 118,
        SalespersonBarcode = 119,
        SalespersonCard = 120,
        SalespersonClear = 121,
        InvoiceComment = 122,
        ChangeUnitOfMeasure = 123,
        ItemSaleMultiple = 124,
        RFIDSale = 125,
        SalesHistory = 126,
        OverrideTaxTransaction = 127,
        OverrideTaxTransactionList = 128,
        OverrideTaxLine = 129,
        OverrideTaxLineList = 130,
        PackSlip = 131,
        DepositOverride = 132,
        BuyWarranty = 133,
        AddAffiliation = 134,
        AddAffiliationFromList = 135,
        AddSerialNumber = 136,
        AddAffiliationToCustomer = 137,
        RemoveAffiliationFromCustomer = 138,
        ConcludeTransaction = 139,
        AddLineCharge = 140,
        AddHeaderCharge = 141,
        ManageCharges = 142,
        RecalculateCharges = 143,
        PayCash = 200,
        PayCard = 201,
        PayCustomerAccount = 202,
        PayCurrency = 203,
        PayCheck = 204,
        PayCashQuick = 206,
        PayLoyalty = 207,
        PayCorporateCard = 208,
        ChangeBack = 210,
        VoidPayment = 211,
        FleetCardInfo = 212,
        PayCreditMemo = 213,
        PayGiftCertificate = 214,
        CashOutGiftCard = 215,
        LineDiscountAmount = 300,
        LineDiscountPercent = 301,
        TotalDiscountAmount = 302,
        TotalDiscountPercent = 303,
        DiscountCodeBarcode = 304,
        CalculateFullDiscounts = 310,
        PopupMenu = 400,
        Submenu = 401,
        VoidTransaction = 500,
        TransactionComment = 501,
        SalesPerson = 502,
        SuspendTransaction = 503,
        RecallTransaction = 504,
        RecallUnconcludedTransaction = 505,
        CardSwipe = 506,
        PharmacyPrescriptionAdd = 507,
        PharmacyPrescriptionCancel = 508,
        PharmacyPrescriptionPaid = 509,
        PharmacyPrescriptions = 510,
        IssueCreditMemo = 511,
        IssueGiftCertificate = 512,
        DisplayTotal = 513,
        RecallSalesOrder = 515,
        SalesInvoice = 516,
        IncomeAccounts = 517,
        ExpenseAccounts = 518,
        AddToGiftCard = 519,
        GiftCardBalance = 520,
        LoyaltyCardPointsBalance = 521,
        CashChangerRegisterAmount = 550,
        CashChangerReset = 551,
        CashChangerRegret = 552,
        CashChangerExit = 553,
        CashChangerChange = 554,
        CashChangerLogOn = 555,
        CashChangerInit = 556,
        SetCustomer = 600,
        CustomerSearch = 602,
        CustomerClear = 603,
        CustomerCard = 604,
        CustomerTransactions = 609,
        CustomerTransactionsReport = 610,
        CustomerBalanceReport = 611,
        CustomerAdd = 612,
        CustomerBarcode = 613,
        EditCustomerOrder = 614,
        EditQuotation = 615,
        CreateCustomerOrder = 620,
        CreateQuotation = 621,
        Search = 622,
        CustomerEdit = 623,
        LoyaltyIssueCard = 625,
        RecalculateCustomerOrder = 627,
        ShipSelectedProducts = 629,
        ShipAllProducts = 630,
        PickupSelectedProducts = 631,
        PickupAllProducts = 632,
        SetQuotationExpirationDate = 633,
        PaymentsHistory = 634,
        ReturnChargesOverride = 635,
        CreateRetailTransaction = 636,
        SetCommissionSalesGroupOnTransaction = 637,
        SetCommissionSalesGroupOnLine = 638,
        ClearCommissionSalesGroupOnTransaction = 639,
        ClearCommissionSalesGroupOnLine = 640,
        CarryoutSelectedProducts = 641,
        CarryoutAllProducts = 642,
        AddCoupons = 643,
        RemoveCoupons = 644,
        LogOn = 700,
        LogOff = 701,
        ChangeUser = 702,
        LockTerminal = 703,
        LogOffForce = 704,
        EmployeeCard = 705,
        EmployeeBarcode = 706,
        ActivateDevice = 707,
        DeactivateDevice = 708,
        ChangeHardwareStation = 709,
        PairHardwareStation = 710,
        MassActivateDevice = 711,
        NegativeAdjustment = 800,
        InventoryLookup = 801,
        StockCount = 802,
        PickingAndReceiving = 803,
        ApplicationExit = 900,
        PrintTaxFree = 906,
        PrintPreviousSlip = 907,
        PrintPreviousInvoice = 908,
        UploadPrinterLogo = 909,
        RestartComputer = 910,
        ShutdownComputer = 911,
        DesignModeEnable = 912,
        DesignModeDisable = 913,
        MinimizePOSWindow = 914,
        BlankOperation = 915,
        WindowsWorkflowOperation = 916,
        DatabaseConnectionStatus = 917,
        ShowBlindClosedShifts = 918,
        ExtendedLogOn = 919,
        TimeRegistration = 920,
        ViewTimeClockEntries = 921,
        ViewProductDetails = 922,
        ViewOrderFulfillmentLines = 928,
        OpenDrawer = 1000,
        ViewReport = 1003,
        TenderDeclaration = 1052,
        BlindCloseShift = 1053,
        SuspendShift = 1054,
        CloseShift = 1055,
        PrintX = 1056,
        PrintZ = 1057,
        PrintFiscalX = 1058,
        PrintFiscalZ = 1059,
        CustomerAccountDeposit = 1100,
        DeclareStartAmount = 1200,
        FloatEntry = 1201,
        TenderRemoval = 1210,
        SafeDrop = 1211,
        BankDrop = 1212,
        ShippingAddressSearch = 1213,
        ShippingAddressAdd = 1214,
        ChangePassword = 1215,
        ResetPassword = 1216,
        KitDisassembly = 1217,
        ForceUnlockPeripheral = 1218,
        OpenURL = 1219,
        ManageSafe = 1220,
        SkipFiscalRegistration = 1300,
        MarkFiscalEventRegistered = 1301,
        Invalid = 65535
    }
    enum ReasonCodeInputRequiredType {
        None = 0,
        Always = 1,
        Positive = 2,
        Negative = 3
    }
    enum RecordingValueType {
        Preferred = 0,
        Example = 1
    }
    enum UserActionType {
        Input = 1,
        Output = 16,
        Validation = 256
    }
    enum ArtifactType {
        None = 0,
        Ax7Bpm = 1,
        Visio = 2,
        TaskGuide = 3,
        Ax6Bpm = 4,
        TaskGuideResources = 5,
        TaskXml = 6,
        VideoWma = 7,
        ProcessXml = 8,
        Trace = 9,
        RapidStartXml = 10,
        UserDrawing = 100
    }
    enum FrameworkAccess {
        None = 0,
        Global = 1,
        Corporate = 2,
        Private = 3,
        BoxPackage = 4
    }
    enum MetadataControl {
        None = 0,
        SingleValue = 1,
        MultiValue = 2,
        Tags = 3,
        Links = 4,
        ComboBox = 5,
        MultiSelect = 6
    }
    enum FiscalIntegrationRegistrationStatus {
        None = 0,
        Completed = 1,
        Skipped = 2,
        MarkedAsRegistered = 3
    }
    enum CartType {
        None = 0,
        Shopping = 1,
        Checkout = 2,
        CustomerOrder = 3,
        IncomeExpense = 4,
        AccountDeposit = 5
    }
    enum CustomerOrderMode {
        None = 0,
        CustomerOrderCreateOrEdit = 1,
        OrderRecalled = 2,
        Pickup = 3,
        Return = 4,
        Cancellation = 5,
        QuoteCreateOrEdit = 6
    }
    enum CartStatus {
        None = 0,
        Created = 1,
        Suspended = 2,
        Voided = 3
    }
    enum CustomerType {
        None = 0,
        Person = 1,
        Organization = 2
    }
    enum DocumentStatus {
        None = 0,
        Quotation = 1,
        PurchaseOrder = 2,
        Confirmation = 3,
        PickingList = 4,
        PackingSlip = 5,
        ReceiptsList = 6,
        Invoice = 7,
        ApproveJournal = 8,
        ProjectInvoice = 9,
        ProjectPackingSlip = 10,
        CRMQuotation = 11,
        Lost = 12,
        Canceled = 13,
        FreeTextInvoice = 14,
        RFQ = 15,
        RFQAccept = 16,
        RFQReject = 17,
        PurchaseRequest = 18,
        RFQResend = 19
    }
    enum CustomerOrderType {
        SalesOrder = 0,
        Quote = 1
    }
    enum LineDiscountCalculationType {
        Line = 0,
        Multiline = 1,
        MaxLineMultiline = 2,
        MinLineMultiline = 3,
        LinePlusMultiline = 4,
        LineMultiplyMultiline = 5
    }
    enum TaxCalculationType {
        Regular = 0,
        GTE = 1
    }
    enum ShiftStatus {
        None = 0,
        Open = 1,
        Closed = 2,
        BlindClosed = 3,
        Suspended = 4,
        Invalid = 5
    }
    enum CommerceListType {
        None = 0,
        WishList = 1
    }
    enum PurchaseTransferOrderType {
        Unknown = 0,
        PurchaseOrder = 1,
        TransferIn = 2,
        TransferOut = 3,
        TransferOrder = 4,
        PickingList = 5
    }
    enum DownloadSessionStatus {
        Started = 0,
        Available = 1,
        Requested = 2,
        Downloaded = 3,
        Applied = 4,
        Canceled = 5,
        CreateFailed = 6,
        DownloadFailed = 7,
        ApplyFailed = 8
    }
    enum HardwareStationType {
        None = 0,
        Shared = 1,
        Dedicated = 2
    }
    enum AuditEventUploadType {
        Async = 0,
        RealTime = 1
    }
    enum AuditEventType {
        Unknown = 0,
        UserLogOn = 1,
        UserLogOff = 2,
        ManagerOverride = 3,
        ItemVoid = 4,
        TransactionVoid = 5,
        PrintReceiptCopy = 6,
        PriceCheck = 7,
        TaxOverride = 8,
        QuantityCorrection = 9,
        PurgeTransactionsData = 10
    }
    enum AuditLogTraceLevel {
        Trace = 0,
        Debug = 1,
        Error = 2
    }
    enum FiscalIntegrationEventType {
        None = 0,
        Sale = 1,
        PrintReceiptCopy = 2,
        ZReport = 3,
        XReport = 4,
        CloseShift = 5,
        BankDrop = 6,
        TenderDeclaration = 7,
        RemoveTender = 8,
        FloatEntry = 9,
        SafeDrop = 10,
        StartingAmount = 11,
        PackingSlip = 12,
        GiftReceipt = 13,
        CustomerAccountDeposit = 14,
        CreditMemo = 15,
        EditCustomerOrder = 16,
        CreateCustomerOrder = 17,
        DepositOverride = 18,
        FiscalXReport = 19,
        FiscalZReport = 20,
        AuditEvent = 21,
        OpenDrawer = 22,
        CancelCustomerOrder = 23
    }
    enum FiscalIntegrationDocumentGenerationResultType {
        None = 0,
        Succeeded = 1,
        NotSupported = 2,
        NotRequired = 3,
        Failed = 4
    }
    enum AttachedServiceStatus {
        None = 0,
        Disabled = 1,
        InProgress = 2,
        Enabled = 3,
        Submitted = 4
    }
    enum CommunicationErrors {
        None = 0,
        Microsoft_Dynamics_Commerce_Runtime_HeadquarterCommunicationFailure = 1,
        Microsoft_Dynamics_Commerce_Runtime_HeadquarterResponseParsingError = 2,
        Microsoft_Dynamics_Commerce_Runtime_AggregateCommunicationError = 3,
        Microsoft_Dynamics_Commerce_Runtime_ExternalProviderError = 4,
        Microsoft_Dynamics_Commerce_Runtime_HeadquarterTransactionServiceMethodCallFailure = 5,
        Microsoft_Dynamics_Commerce_Runtime_TransactionServiceTimeOut = 6,
        Microsoft_Dynamics_Commerce_Runtime_TransactionServiceException = 7,
        Microsoft_Dynamics_Commerce_Runtime_TransactionServiceAuthenticationFailedFault = 8,
        Microsoft_Dynamics_Commerce_Runtime_TransactionServiceForbiddenFault = 9,
        Microsoft_Dynamics_Commerce_Runtime_TransactionServiceSenderFault = 10,
        Microsoft_Dynamics_Commerce_Runtime_InvalidS2SClientId = 11,
        Microsoft_Dynamics_Commerce_Runtime_InvalidS2SSecret = 12,
        Microsoft_Dynamics_Commerce_Runtime_InvalidS2STenant = 13,
        Microsoft_Dynamics_Commerce_Runtime_InvalidS2SApplicationName = 14,
        Microsoft_Dynamics_Commerce_Runtime_TransactionServiceLoyaltySenderFault = 15
    }
    enum ConfigurationErrors {
        None = 0,
        Microsoft_Dynamics_Commerce_Runtime_ConfigurationSettingNotFound = 1,
        Microsoft_Dynamics_Commerce_Runtime_InvalidConfigurationKeyFormat = 2,
        Microsoft_Dynamics_Commerce_Runtime_ApplicationCompositionFailed = 3,
        Microsoft_Dynamics_Commerce_Runtime_InvalidChannelConfiguration = 4,
        Microsoft_Dynamics_Commerce_Runtime_InvalidPipelineConfiguration = 5,
        Microsoft_Dynamics_Commerce_Runtime_InvalidProviderConfiguration = 6,
        Microsoft_Dynamics_Commerce_Runtime_UnableToFindDeliveryOptions = 7,
        Microsoft_Dynamics_Commerce_Runtime_UnableToFindDeliveryPreferences = 8,
        Microsoft_Dynamics_Commerce_Runtime_UnableToFindConfigForTenderType = 9,
        Microsoft_Dynamics_Commerce_Runtime_ConnectionIsNotOverridden = 10,
        Microsoft_Dynamics_Commerce_Runtime_PaymentConnectorNotFound = 11,
        Microsoft_Dynamics_Commerce_Runtime_DeviceConfigurationNotFound = 12,
        Microsoft_Dynamics_Commerce_Runtime_HardwareProfileNotFound = 13,
        Microsoft_Dynamics_Commerce_Runtime_LayoutNotFound = 14,
        Microsoft_Dynamics_Commerce_Runtime_VersionedEdmResourceFileNotFound = 15,
        Microsoft_Dynamics_Commerce_Runtime_RetailServerConfigurationNotFound = 16,
        Microsoft_Dynamics_Commerce_Runtime_RetailServerCertificateNotFound = 17,
        Microsoft_Dynamics_Commerce_Runtime_ActivatedDeviceMissingTokenIssueDatetime = 18,
        Microsoft_Dynamics_Commerce_Runtime_LCSLibrariesNotConfigured = 19,
        Microsoft_Dynamics_Commerce_Runtime_UnknownRequestResponsePair = 20,
        Microsoft_Dynamics_Commerce_Runtime_ProductRecommendationsDisabled = 21,
        Microsoft_Dynamics_Commerce_Runtime_UnableToRetrieveRecommendationServiceCredentials = 22,
        Microsoft_Dynamics_Commerce_Runtime_CommerceIssuerNotFound = 23,
        Microsoft_Dynamics_Commerce_Runtime_SecretProviderNotAvailable = 24,
        Microsoft_Dynamics_Commerce_Runtime_SecretNotFound = 25,
        Microsoft_Dynamics_Commerce_Runtime_NotValidProfilesConfiguration = 26
    }
    enum DataValidationErrors {
        None = 0,
        RegexAttribute_ValidationError = 1,
        RequiredAttribute_ValidationError = 2,
        Microsoft_Dynamics_Commerce_Runtime_AuthenticationGrantTypeNotSupported = 3,
        Microsoft_Dynamics_Commerce_Runtime_BlockedLoyaltyCard = 4,
        Microsoft_Dynamics_Commerce_Runtime_InvalidLoyaltyCardNumber = 5,
        Microsoft_Dynamics_Commerce_Runtime_LoyaltyCardNotFound = 6,
        Microsoft_Dynamics_Commerce_Runtime_ProductMasterPageRequired = 7,
        Microsoft_Dynamics_Commerce_Runtime_RequiredValueNotFound = 8,
        Microsoft_Dynamics_Commerce_Runtime_SalesLineNotAllowed = 9,
        Microsoft_Dynamics_Commerce_Runtime_RemoteProductsNotSupportedWithCurrentTransactionType = 10,
        Microsoft_Dynamics_Commerce_Runtime_CustomerAccountIsBlocked = 11,
        Microsoft_Dynamics_Commerce_Runtime_CustomerInvoiceAccountIsBlocked = 12,
        Microsoft_Dynamics_Commerce_Runtime_ProductIsNotActive = 13,
        Microsoft_Dynamics_Commerce_Runtime_ProductIsBlocked = 14,
        Microsoft_Dynamics_Commerce_Runtime_ValueOutOfRange = 15,
        Microsoft_Dynamics_Commerce_Runtime_ObjectNotFound = 16,
        Microsoft_Dynamics_Commerce_Runtime_DuplicateObject = 17,
        Microsoft_Dynamics_Commerce_Runtime_InvalidFormat = 18,
        Microsoft_Dynamics_Commerce_Runtime_MissingStockCountTransactions = 19,
        Microsoft_Dynamics_Commerce_Runtime_MissingParameter = 20,
        Microsoft_Dynamics_Commerce_Runtime_InvalidProductDimensionCombinations = 21,
        Microsoft_Dynamics_Commerce_Runtime_EmployeeDiscountExceeded = 22,
        Microsoft_Dynamics_Commerce_Runtime_EmployeeDetailsNotFound = 23,
        Microsoft_Dynamics_Commerce_Runtime_BarcodeNotFound = 24,
        Microsoft_Dynamics_Commerce_Runtime_CustomerNotFound = 25,
        Microsoft_Dynamics_Commerce_Runtime_ExistingCustomerAlreadyMappedToExternalIdentity = 26,
        Microsoft_Dynamics_Commerce_Runtime_UnsupportedLanguage = 27,
        Microsoft_Dynamics_Commerce_Runtime_UnknownRequest = 28,
        Microsoft_Dynamics_Commerce_Runtime_UnSupportedType = 29,
        Microsoft_Dynamics_Commerce_Runtime_AggregateValidationError = 30,
        Microsoft_Dynamics_Commerce_Runtime_IdMismatch = 31,
        Microsoft_Dynamics_Commerce_Runtime_InvalidRequest = 32,
        Microsoft_Dynamics_Commerce_Runtime_MultipleEmployeeLineDiscountsNotAllowed = 33,
        Microsoft_Dynamics_Commerce_Runtime_MultipleEmployeeTotalDiscountsNotAllowed = 34,
        Microsoft_Dynamics_Commerce_Runtime_IncomeExpenseAccountsInSameCart = 35,
        Microsoft_Dynamics_Commerce_Runtime_IncomeExpenseCartDoesNotAllowDiscounts = 36,
        Microsoft_Dynamics_Commerce_Runtime_IncomeExpenseCartDoesNotAllowSalesLine = 37,
        Microsoft_Dynamics_Commerce_Runtime_IncomeExpenseCartDoesNotAllowCustomer = 38,
        Microsoft_Dynamics_Commerce_Runtime_IncomeExpenseCartDoesNotAllowGiftCardLine = 39,
        Microsoft_Dynamics_Commerce_Runtime_IncomeExpenseLineDoesNotAllowSettingTransactionStatus = 40,
        Microsoft_Dynamics_Commerce_Runtime_IncomeExpenseCartDoesNotAllowAffiliation = 41,
        Microsoft_Dynamics_Commerce_Runtime_InsufficientQuantityAvailable = 42,
        Microsoft_Dynamics_Commerce_Runtime_InvalidUnitOfMeasure = 43,
        Microsoft_Dynamics_Commerce_Runtime_UnitOfMeasureConversionNotFound = 44,
        Microsoft_Dynamics_Commerce_Runtime_InvalidDeliveryMode = 45,
        Microsoft_Dynamics_Commerce_Runtime_DeliveryModeMissing = 46,
        Microsoft_Dynamics_Commerce_Runtime_InvalidEmailAddress = 47,
        Microsoft_Dynamics_Commerce_Runtime_InvalidDeliveryPreferenceType = 48,
        Microsoft_Dynamics_Commerce_Runtime_InvalidShippingAddress = 49,
        Microsoft_Dynamics_Commerce_Runtime_InvalidCountryRegion = 50,
        Microsoft_Dynamics_Commerce_Runtime_InvalidStateProvince = 51,
        Microsoft_Dynamics_Commerce_Runtime_InvalidCounty = 52,
        Microsoft_Dynamics_Commerce_Runtime_InvalidCity = 53,
        Microsoft_Dynamics_Commerce_Runtime_InvalidDistrict = 54,
        Microsoft_Dynamics_Commerce_Runtime_InvalidZipPostalCode = 55,
        Microsoft_Dynamics_Commerce_Runtime_InvalidAddress = 56,
        Microsoft_Dynamics_Commerce_Runtime_InvalidShippingDate = 57,
        Microsoft_Dynamics_Commerce_Runtime_DiscountAmountInvalidated = 58,
        Microsoft_Dynamics_Commerce_Runtime_InvalidPriceEncountered = 59,
        Microsoft_Dynamics_Commerce_Runtime_ItemDiscontinuedFromChannel = 60,
        Microsoft_Dynamics_Commerce_Runtime_DiscontinuedProductsRemovedFromCart = 61,
        Microsoft_Dynamics_Commerce_Runtime_GrossWeightForItemNotFound = 62,
        Microsoft_Dynamics_Commerce_Runtime_ListingIdNotFound = 63,
        Microsoft_Dynamics_Commerce_Runtime_RequiredReasonCodesMissing = 64,
        Microsoft_Dynamics_Commerce_Runtime_CartNotActive = 65,
        Microsoft_Dynamics_Commerce_Runtime_InvalidStatus = 66,
        Microsoft_Dynamics_Commerce_Runtime_VoidTransactionContainsTenderedLines = 67,
        Microsoft_Dynamics_Commerce_Runtime_InvalidCustomerOrderModeForVoidProducts = 68,
        Microsoft_Dynamics_Commerce_Runtime_CartContainsProductsForReturn = 69,
        Microsoft_Dynamics_Commerce_Runtime_InvalidReceiptTemplate = 70,
        Microsoft_Dynamics_Commerce_Runtime_InvalidReceiptItem = 71,
        Microsoft_Dynamics_Commerce_Runtime_ItemIdBarcodeMissing = 72,
        Microsoft_Dynamics_Commerce_Runtime_MultipleItemsForItemId = 73,
        Microsoft_Dynamics_Commerce_Runtime_InvalidCustomerOrderModeChange = 74,
        Microsoft_Dynamics_Commerce_Runtime_InvalidCustomerOrderModeForReturnTransaction = 75,
        Microsoft_Dynamics_Commerce_Runtime_InvalidCustomerOrderModeForAddCartLine = 76,
        Microsoft_Dynamics_Commerce_Runtime_CannotAddProductHavingRefundChargeAmount = 77,
        Microsoft_Dynamics_Commerce_Runtime_CannotChangeCustomerIdWhenEditingCustomerOrder = 78,
        Microsoft_Dynamics_Commerce_Runtime_QuoteMustNotHaveAnyPayment = 79,
        Microsoft_Dynamics_Commerce_Runtime_QuoteMustHaveValidQuotationExpiryDate = 80,
        Microsoft_Dynamics_Commerce_Runtime_QuoteMustNotHaveDepositOverride = 81,
        Microsoft_Dynamics_Commerce_Runtime_DepositMustBeGreaterThanZero = 82,
        Microsoft_Dynamics_Commerce_Runtime_DepositOverrideMustNotBeGreaterThanTotalAmount = 83,
        Microsoft_Dynamics_Commerce_Runtime_DepositOverrideMustNotBeGreaterThanMaximumOverrideAmount = 84,
        Microsoft_Dynamics_Commerce_Runtime_InvalidPickupDepositOverrideAmount = 85,
        Microsoft_Dynamics_Commerce_Runtime_OrderWasNotCreatedWithDepositOverride = 86,
        Microsoft_Dynamics_Commerce_Runtime_DepositOverrideMayNotBeChanged = 87,
        Microsoft_Dynamics_Commerce_Runtime_DepositOverrideMayNotBeCleared = 88,
        Microsoft_Dynamics_Commerce_Runtime_AmountDueMustBePaidBeforeCheckout = 89,
        Microsoft_Dynamics_Commerce_Runtime_DiscountMustBeCalculatedBeforeCheckout = 90,
        Microsoft_Dynamics_Commerce_Runtime_TotalsMustBeCalculatedBeforeCheckout = 91,
        Microsoft_Dynamics_Commerce_Runtime_IncorrectPaymentAmountSign = 92,
        Microsoft_Dynamics_Commerce_Runtime_PaymentExceedsMaximumAmountPerLine = 93,
        Microsoft_Dynamics_Commerce_Runtime_PaymentExceedsMinimumAmountPerLine = 94,
        Microsoft_Dynamics_Commerce_Runtime_PaymentExceedsMaximumAmountPerTransaction = 95,
        Microsoft_Dynamics_Commerce_Runtime_PaymentExceedsMinimumAmountPerTransaction = 96,
        Microsoft_Dynamics_Commerce_Runtime_ChangebackIsNotAllowed = 97,
        Microsoft_Dynamics_Commerce_Runtime_OvertenderAmountExceedsMaximumAllowedValue = 98,
        Microsoft_Dynamics_Commerce_Runtime_BalanceAmountExceedsMaximumAllowedValue = 99,
        Microsoft_Dynamics_Commerce_Runtime_PaymentMustBeUsedToFinalizeTransaction = 100,
        Microsoft_Dynamics_Commerce_Runtime_UnableToFindListing = 101,
        Microsoft_Dynamics_Commerce_Runtime_UnableToFindEmployeeActivityBreakCategory = 102,
        Microsoft_Dynamics_Commerce_Runtime_UnableToFindVariant = 103,
        Microsoft_Dynamics_Commerce_Runtime_InvalidStoreNumber = 104,
        Microsoft_Dynamics_Commerce_Runtime_SalesLineMustHavePickupDeliveryMode = 105,
        Microsoft_Dynamics_Commerce_Runtime_UnableToPickupMoreThanQtyRemaining = 106,
        Microsoft_Dynamics_Commerce_Runtime_InvalidDeliveryCharge = 107,
        Microsoft_Dynamics_Commerce_Runtime_CurrencyConversionFailed = 108,
        Microsoft_Dynamics_Commerce_Runtime_CurrencyChannelOrderMismatch = 109,
        Microsoft_Dynamics_Commerce_Runtime_CurrencyNotFound = 110,
        Microsoft_Dynamics_Commerce_Runtime_InvalidCancellationCharge = 111,
        Microsoft_Dynamics_Commerce_Runtime_ChargeNotConfiguredOnHeadquarters = 112,
        Microsoft_Dynamics_Commerce_Runtime_ShippingChargeRefundCannotBePositive = 113,
        Microsoft_Dynamics_Commerce_Runtime_ShippingChargeRefundIsNotAllowed = 114,
        Microsoft_Dynamics_Commerce_Runtime_CannotApplyHeaderChargesWhenShippingRefundAppliedOnCartLines = 115,
        Microsoft_Dynamics_Commerce_Runtime_CannotApplyRefundChargeOnProductForSale = 116,
        Microsoft_Dynamics_Commerce_Runtime_PickupModeOfDeliveryNotConfiguredOnHeadquarters = 117,
        Microsoft_Dynamics_Commerce_Runtime_SerialNumberMissing = 118,
        Microsoft_Dynamics_Commerce_Runtime_SerialNumberCannotBeChanged = 119,
        Microsoft_Dynamics_Commerce_Runtime_SerialNumberMissingInCustomerOrder = 120,
        Microsoft_Dynamics_Commerce_Runtime_SerializedQuantityGreaterThanOne = 121,
        Microsoft_Dynamics_Commerce_Runtime_MultipleCreditCardPaymentNotSupported = 122,
        Microsoft_Dynamics_Commerce_Runtime_InvalidCardExpirationDate = 123,
        Microsoft_Dynamics_Commerce_Runtime_PurchaseTransferOrderMissing = 124,
        Microsoft_Dynamics_Commerce_Runtime_NotAllLinesSaved = 125,
        Microsoft_Dynamics_Commerce_Runtime_PurchaseTransferOrderRequired = 126,
        Microsoft_Dynamics_Commerce_Runtime_SalesMustHaveQuantityGreaterThanZero = 127,
        Microsoft_Dynamics_Commerce_Runtime_ReturnsMustHaveQuantityLesserThanZero = 128,
        Microsoft_Dynamics_Commerce_Runtime_CannotReturnMoreThanPurchased = 129,
        Microsoft_Dynamics_Commerce_Runtime_CannotReturnMoreThanInvoicedMinusReturned = 130,
        Microsoft_Dynamics_Commerce_Runtime_CannotReturnMultipleTransactions = 131,
        Microsoft_Dynamics_Commerce_Runtime_PropertyUpdateNotAllowed = 132,
        Microsoft_Dynamics_Commerce_Runtime_GiftCardDiscountNotAllowed = 133,
        Microsoft_Dynamics_Commerce_Runtime_LoadingActiveCartFromAnotherTerminalNotAllowed = 134,
        Microsoft_Dynamics_Commerce_Runtime_ShiftAlreadyOpenOnDifferentTerminal = 135,
        Microsoft_Dynamics_Commerce_Runtime_TerminalHasAnOpenShift = 136,
        Microsoft_Dynamics_Commerce_Runtime_CashDrawerHasAnOpenShift = 137,
        Microsoft_Dynamics_Commerce_Runtime_ShiftStartingAmountNotEntered = 138,
        Microsoft_Dynamics_Commerce_Runtime_ShiftTenderDeclarationAmountNotEntered = 139,
        Microsoft_Dynamics_Commerce_Runtime_ShiftHasUnreconciledLines = 140,
        Microsoft_Dynamics_Commerce_Runtime_ReconciliationLineStatusMustBePending = 141,
        Microsoft_Dynamics_Commerce_Runtime_ReceiptTypeNotSupported = 142,
        Microsoft_Dynamics_Commerce_Runtime_ReceiptTypeNotFound = 143,
        Microsoft_Dynamics_Commerce_Runtime_MoreThanOneTenderTypeForTenderTypeId = 144,
        Microsoft_Dynamics_Commerce_Runtime_TimeClockNotEnabled = 145,
        Microsoft_Dynamics_Commerce_Runtime_ViewTimeClockNotEnabled = 146,
        Microsoft_Dynamics_Commerce_Runtime_NoMoreThanOneOperationWithAGiftCard = 147,
        Microsoft_Dynamics_Commerce_Runtime_GiftCardUnlockFailed = 148,
        Microsoft_Dynamics_Commerce_Runtime_GiftCardLineVoidReversalNotSupported = 149,
        Microsoft_Dynamics_Commerce_Runtime_SalesInvoiceLineVoidReversalNotSupported = 150,
        Microsoft_Dynamics_Commerce_Runtime_CannotSuspendCartWithActiveTenderLines = 151,
        Microsoft_Dynamics_Commerce_Runtime_CannotSuspendCartWithActiveGiftCardSalesLines = 152,
        Microsoft_Dynamics_Commerce_Runtime_CannotUpdateUnitOfMeasureOnPriceOverriddenLine = 153,
        Microsoft_Dynamics_Commerce_Runtime_SettleInvoiceFailed = 154,
        Microsoft_Dynamics_Commerce_Runtime_TerminalNotFound = 155,
        Microsoft_Dynamics_Commerce_Runtime_InvalidQuantity = 156,
        Microsoft_Dynamics_Commerce_Runtime_ItemQuantityExceeded = 157,
        Microsoft_Dynamics_Commerce_Runtime_NoPriceOverrideForReturns = 158,
        Microsoft_Dynamics_Commerce_Runtime_NoPriceOverrideForGiftCards = 159,
        Microsoft_Dynamics_Commerce_Runtime_NoPriceOverrideForInvoiceLines = 160,
        Microsoft_Dynamics_Commerce_Runtime_CannotAddNonProductItemToCustomerOrder = 161,
        Microsoft_Dynamics_Commerce_Runtime_ReturnItemPriceExceeded = 162,
        Microsoft_Dynamics_Commerce_Runtime_ReturnTransactionTotalExceeded = 163,
        Microsoft_Dynamics_Commerce_Runtime_ShiftNotFound = 164,
        Microsoft_Dynamics_Commerce_Runtime_ShiftValidationError = 165,
        Microsoft_Dynamics_Commerce_Runtime_CredentialIdentifierAlreadyInUse = 166,
        Microsoft_Dynamics_Commerce_Runtime_CreditVoucherNull = 167,
        Microsoft_Dynamics_Commerce_Runtime_CartNotFound = 168,
        Microsoft_Dynamics_Commerce_Runtime_CustomerAccountDepositMultipleCartLinesNotAllowed = 169,
        Microsoft_Dynamics_Commerce_Runtime_CustomerAccountNumberIsNotSet = 170,
        Microsoft_Dynamics_Commerce_Runtime_CannotPayForCustomerAccountDepositWithCustomerAccountPaymentMethod = 171,
        Microsoft_Dynamics_Commerce_Runtime_CustomerAccountDepositCannotBeNegative = 172,
        Microsoft_Dynamics_Commerce_Runtime_CustomerAccountDepositCannotBeVoided = 173,
        Microsoft_Dynamics_Commerce_Runtime_OfflineDatabaseChunkFileNotFound = 174,
        Microsoft_Dynamics_Commerce_Runtime_ChannelIsNotPublished = 175,
        Microsoft_Dynamics_Commerce_Runtime_InvalidOperation = 176,
        Microsoft_Dynamics_Commerce_Runtime_MaxCountingDifferenceExceeded = 177,
        Microsoft_Dynamics_Commerce_Runtime_EmployeeNotAllowedManageSharedShift = 178,
        Microsoft_Dynamics_Commerce_Runtime_InvalidAmount = 179,
        Microsoft_Dynamics_Commerce_Runtime_InvalidBagNumber = 180,
        Microsoft_Dynamics_Commerce_Runtime_NoPrintersReturned = 181,
        Microsoft_Dynamics_Commerce_Runtime_EnteringPriceNotAllowed = 182,
        Microsoft_Dynamics_Commerce_Runtime_MustKeyInEqualHigherPrice = 183,
        Microsoft_Dynamics_Commerce_Runtime_MustKeyInEqualLowerPrice = 184,
        Microsoft_Dynamics_Commerce_Runtime_MustKeyInNewPrice = 185,
        Microsoft_Dynamics_Commerce_Runtime_ConflictingClaimsPresentOnUserContext = 186,
        Microsoft_Dynamics_Commerce_Runtime_InvalidCartSalesLineAdd = 187,
        Microsoft_Dynamics_Commerce_Runtime_InvalidCartSalesLineUpdate = 188,
        Microsoft_Dynamics_Commerce_Runtime_InvalidCartState = 189,
        Microsoft_Dynamics_Commerce_Runtime_InvalidProduct = 190,
        Microsoft_Dynamics_Commerce_Runtime_ConflictingCartLineOperation = 191,
        Microsoft_Dynamics_Commerce_Runtime_InvalidCartLinesAggregateError = 192,
        Microsoft_Dynamics_Commerce_Runtime_InvalidCartInventoryLocationId = 193,
        Microsoft_Dynamics_Commerce_Runtime_InvalidCartVersion = 194,
        Microsoft_Dynamics_Commerce_Runtime_CustomerOrDirectoryPartyNotFound = 195,
        Microsoft_Dynamics_Commerce_Runtime_CannotUpdateCustomerAndLoyaltyCardAtTheSameTime = 196,
        Microsoft_Dynamics_Commerce_Runtime_ConflictLoyaltyCardCustomerAndTransactionCustomer = 197,
        Microsoft_Dynamics_Commerce_Runtime_InvalidCashBackAmount = 198,
        Microsoft_Dynamics_Commerce_Runtime_UnableToRetrieveCardPaymentAcceptResult = 199,
        Microsoft_Dynamics_Commerce_Runtime_PreValidationForAsyncAddressFailed = 200,
        Microsoft_Dynamics_Commerce_Runtime_ZeroPriceIsNotAllowed = 201,
        Microsoft_Dynamics_Commerce_Runtime_OperationNotAllowedOnLinkedProduct = 202,
        Microsoft_Dynamics_Commerce_Runtime_CustomerAccountMismatchBetweenTransactionAndDepositLine = 203,
        Microsoft_Dynamics_Commerce_Runtime_CustomerAccountDepositLineDoesNotAllowSettingTransactionStatus = 204,
        Microsoft_Dynamics_Commerce_Runtime_CustomerAccountDepositLinesNotAllowed = 205,
        Microsoft_Dynamics_Commerce_Runtime_ReturnLineNumberNotFound = 206,
        Microsoft_Dynamics_Commerce_Runtime_CustomerNameExceedsMaximumLength = 207,
        Microsoft_Dynamics_Commerce_Runtime_CustomerPhoneNumberExceedsMaximumLength = 208,
        Microsoft_Dynamics_Commerce_Runtime_CustomerEmailExceedsMaximumLength = 209,
        Microsoft_Dynamics_Commerce_Runtime_InvalidShiftStatusChange = 210,
        Microsoft_Dynamics_Commerce_Runtime_AmountExceedsMaximumAllowed = 211,
        Microsoft_Dynamics_Commerce_Runtime_PrintXZReportNotConfigured = 212,
        Microsoft_Dynamics_Commerce_Runtime_ColumnsNameBadFormat = 213,
        Microsoft_Dynamics_Commerce_Runtime_SelectedValuesDidNotMatchExactlyOneProduct = 214,
        Microsoft_Dynamics_Commerce_Runtime_ProductNotFound = 215,
        Microsoft_Dynamics_Commerce_Runtime_DiscountNotAllowed = 216,
        Microsoft_Dynamics_Commerce_Runtime_FailedToRecallTransaction = 217,
        Microsoft_Dynamics_Commerce_Runtime_MultiplePrimaryAddresses = 218,
        Microsoft_Dynamics_Commerce_Runtime_SortingColumnsNotSupported = 219,
        Microsoft_Dynamics_Commerce_Runtime_WorkerDoesNotHaveAllowSaleOutsideAssortmentPermission = 220,
        Microsoft_Dynamics_Commerce_Runtime_InvalidOrderInvoiceData = 221,
        Microsoft_Dynamics_Commerce_Runtime_NoSalesInvoiceReturned = 222,
        Microsoft_Dynamics_Commerce_Runtime_GiftCardLineNotAllowedWithInvoiceLine = 223,
        Microsoft_Dynamics_Commerce_Runtime_InvoiceLineNotAllowedInCustomerOrder = 224,
        Microsoft_Dynamics_Commerce_Runtime_CustomerOrderNotAllowedToContainInvoiceLine = 225,
        Microsoft_Dynamics_Commerce_Runtime_InvoiceLineNotAllowedWithItemLines = 226,
        Microsoft_Dynamics_Commerce_Runtime_ItemLinesNotAllowedWithInvoiceLine = 227,
        Microsoft_Dynamics_Commerce_Runtime_MultipleInvoiceLinesNotAllowed = 228,
        Microsoft_Dynamics_Commerce_Runtime_CustomerAccountRemovalNotAllowedForInvoiceSales = 229,
        Microsoft_Dynamics_Commerce_Runtime_InvoiceLineNotAllowedInCartWithoutCustomerAccount = 230,
        Microsoft_Dynamics_Commerce_Runtime_InvoiceLineNotAllowedInCartWithDifferentCustomerAccount = 231,
        Microsoft_Dynamics_Commerce_Runtime_InvoiceDiscountNotAllowed = 232,
        Microsoft_Dynamics_Commerce_Runtime_AttributeTypeNotSupported = 233,
        Microsoft_Dynamics_Commerce_Runtime_InvalidAttributeValue = 234,
        Microsoft_Dynamics_Commerce_Runtime_AttributeValueOutOfBounds = 235,
        Microsoft_Dynamics_Commerce_Runtime_AttributeValueCannotBeNull = 236,
        Microsoft_Dynamics_Commerce_Runtime_AttributeTypeMismatch = 237,
        Microsoft_Dynamics_Commerce_Runtime_AttributeDefinitionNotFound = 238,
        Microsoft_Dynamics_Commerce_Runtime_MixingSalesAndReturnsProhibited = 239,
        Microsoft_Dynamics_Commerce_Runtime_InvalidCouponCode = 240,
        Microsoft_Dynamics_Commerce_Runtime_CouponRequiresCustomerOnCart = 241,
        Microsoft_Dynamics_Commerce_Runtime_ExclusiveCouponCannotBeAppliedWithOtherCoupons = 242,
        Microsoft_Dynamics_Commerce_Runtime_CouponExceedsDefinedUsageLimits = 243,
        Microsoft_Dynamics_Commerce_Runtime_UserCannotAcceptFulfillmentLines = 244,
        Microsoft_Dynamics_Commerce_Runtime_UserCannotRejectFulfillmentLines = 245,
        Microsoft_Dynamics_Commerce_Runtime_RestrictPrintingReceiptCopy_AlreadyRegistered = 246,
        Microsoft_Dynamics_Commerce_Runtime_RestrictPrintingReceiptCopy_HQisNotAvailable = 247,
        Microsoft_Dynamics_Commerce_Runtime_RestrictPrintingReceiptCopy = 248,
        Microsoft_Dynamics_Commerce_Runtime_RemoveAddPaymentMethodConfigurationNotDefined = 249,
        Microsoft_Dynamics_Commerce_Runtime_OverrideDepostAmountShouldBeLargerThanCarriedOutAmount = 250,
        Microsoft_Dynamics_Commerce_Runtime_MixingItemIdsAndProductIdsProhibited = 251,
        Microsoft_Dynamics_Commerce_Runtime_PackingLinesFromDifferentOrdersNotAllowed = 252,
        Microsoft_Dynamics_Commerce_Runtime_InvalidFulfillmentLineKey = 253,
        Microsoft_Dynamics_Commerce_Runtime_Missing_LocationId = 254,
        Microsoft_Dynamics_Commerce_Runtime_Missing_ShipDate = 255,
        Microsoft_Dynamics_Commerce_Runtime_Missing_ReceiveDate = 256,
        Microsoft_Dynamics_Commerce_Runtime_InvalidOrderType = 257,
        Microsoft_Dynamics_Commerce_Runtime_ShippingSerializedProductsNotSupported = 258,
        Microsoft_Dynamics_Commerce_Runtime_ShippingMultipleOrdersNotSupported = 259,
        Microsoft_Dynamics_Commerce_Runtime_UnableToOpenShift = 260,
        Microsoft_Dynamics_Commerce_Runtime_CartAlreadyCheckedOut = 261,
        Microsoft_Dynamics_Commerce_Runtime_CashDrawerLimitExceeded = 262,
        Microsoft_Dynamics_Commerce_InvalidShift = 263,
        Microsoft_Dynamics_Commerce_Runtime_SuspendedTransactionNotFound = 264,
        Microsoft_Dynamics_Commerce_Runtime_CartContainsProductsForReturnOnly = 265,
        Microsoft_Dynamics_Commerce_Runtime_CustomerBlockedForLoyaltyEnrollment = 266,
        Microsoft_Dynamics_Commerce_Runtime_InactiveCouponCode = 267,
        Microsoft_Dynamics_Commerce_Runtime_ExpiredCouponCode = 268,
        Microsoft_Dynamics_Commerce_Runtime_NotStartedCouponCode = 269,
        Microsoft_Dynamics_Commerce_Runtime_ExceededUsageLimitCouponCode = 270,
        Microsoft_Dynamics_Commerce_Runtime_InvalidResumeCartRequest = 271,
        Microsoft_Dynamics_Commerce_Runtime_ChargeCodeNotFound = 272,
        Microsoft_Dynamics_Commerce_Runtime_PaymentException_ReturnWithoutReceiptPayment = 273
    }
    enum FeatureNotSupportedErrors {
        None = 0,
        Microsoft_Dynamics_Commerce_Runtime_RequestTypeNotSupported = 1,
        Microsoft_Dynamics_Commerce_Runtime_RequestParametersNotSupported = 2,
        Microsoft_Dynamics_Commerce_Runtime_RequestParameterValueNotSupported = 3,
        Microsoft_Dynamics_Commerce_Runtime_ChangeTenderTypeNotSupported = 4,
        Microsoft_Dynamics_Commerce_Runtime_DemoModeOperationNotSupported = 5,
        Microsoft_Dynamics_Commerce_Runtime_RealtimeServiceNotSupported = 6,
        Microsoft_Dynamics_Commerce_Runtime_ReceiptTypeNotSupported = 7,
        Microsoft_Dynamics_Commerce_Runtime_OnlineChannelRequired = 8,
        Microsoft_Dynamics_Commerce_Runtime_CouponsNotSupportedOnSalesQuotations = 9,
        Microsoft_Dynamics_Commerce_Runtime_FeatureNotSupportedInHeadquarters = 10,
        Microsoft_Dynamics_Commerce_Runtime_UpdatingCouponsNotSupportedOnPickup = 11,
        Microsoft_Dynamics_Commerce_Runtime_UpdateAsyncCustomerNotSupported = 12,
        Microsoft_Dynamics_Commerce_Runtime_GiftCardPaymentNotSupported = 13,
        Microsoft_Dynamics_Commerce_Runtime_GiftCardOperationNotSupported = 14,
        Microsoft_Dynamics_Commerce_Runtime_CurrentVersionSupportsOnlyOneInvoicePayment = 15
    }
    enum SecurityErrors {
        None = 0,
        Microsoft_Dynamics_Commerce_Runtime_AuthenticationFailed = 1,
        Microsoft_Dynamics_Commerce_Runtime_AuthorizationFailed = 2,
        Microsoft_Dynamics_Commerce_Runtime_AuthenticationMethodDisabled = 3,
        Microsoft_Dynamics_Commerce_Runtime_CommerceIdentityNotFound = 4,
        Microsoft_Dynamics_Commerce_Runtime_UserNotActivated = 5,
        Microsoft_Dynamics_Commerce_Runtime_PrincipalMissing = 6,
        Microsoft_Dynamics_Commerce_Runtime_PasswordRequired = 7,
        Microsoft_Dynamics_Commerce_Runtime_ChangePasswordFailed = 8,
        Microsoft_Dynamics_Commerce_Runtime_InvalidPassword = 9,
        Microsoft_Dynamics_Commerce_Runtime_IdentityProviderNotFound = 10,
        Microsoft_Dynamics_Commerce_Runtime_InvalidAuthenticationCredentials = 11,
        Microsoft_Dynamics_Commerce_Runtime_UpdatePasswordFailed = 12,
        Microsoft_Dynamics_Commerce_Runtime_ResetPasswordFailed = 13,
        Microsoft_Dynamics_Commerce_Runtime_NonDrawerOperationsOnly = 14,
        Microsoft_Dynamics_Commerce_Runtime_UseExistingShiftPermissionDenied = 15,
        Microsoft_Dynamics_Commerce_Runtime_CreateTransferOrderNotAllowed = 16,
        Microsoft_Dynamics_Commerce_Runtime_UserCannotMassActivation = 17,
        Microsoft_Dynamics_Commerce_Runtime_OpenMultipleShiftsNotAllowed = 18,
        Microsoft_Dynamics_Commerce_Runtime_UserSessionNotOpened = 19,
        Microsoft_Dynamics_Commerce_Runtime_HeadquarterTransactionServiceMethodCallFailure = 20,
        Microsoft_Dynamics_Commerce_Runtime_HeadquarterCommunicationFailure = 21,
        Microsoft_Dynamics_Commerce_Runtime_DeviceTokenExpired = 22,
        Microsoft_Dynamics_Commerce_Runtime_DeviceTokenNotPresent = 23,
        Microsoft_Dynamics_Commerce_Runtime_InvalidChannel = 24,
        Microsoft_Dynamics_Commerce_Runtime_ElevatedUserSameAsLoggedOnUser = 25,
        Microsoft_Dynamics_Commerce_Runtime_GrantTypeNotSupported = 26,
        Microsoft_Dynamics_Commerce_Runtime_DeviceDeactivationFailed = 27,
        Microsoft_Dynamics_Commerce_Runtime_HardwareStationTokenCreationFailed = 28,
        Microsoft_Dynamics_Commerce_Runtime_InvalidHardwareStationToken = 29,
        Microsoft_Dynamics_Commerce_Runtime_UserLogonAnotherTerminal = 30,
        Microsoft_Dynamics_Commerce_Runtime_UnlockRegisterFailed = 31,
        Microsoft_Dynamics_Commerce_Runtime_ChannelDatabaseConnectionFailed = 32,
        Microsoft_Dynamics_Commerce_Runtime_InvalidUserToken = 33,
        Microsoft_Dynamics_Commerce_Runtime_CustomerAccountAuthorizationFailure = 34,
        Microsoft_Dynamics_Commerce_Runtime_LocalLogonFailed = 35,
        Microsoft_Dynamics_Commerce_Runtime_LocalDeviceAuthenticationFailed = 36,
        Microsoft_Dynamics_Commerce_Runtime_DeviceTokenValidationFailed = 37,
        Microsoft_Dynamics_Commerce_Runtime_NoDeviceManagementPermission = 38,
        Microsoft_Dynamics_Commerce_Runtime_IncorrectLogonTypeUserAccountOrPassword = 39,
        Microsoft_Dynamics_Commerce_Runtime_InvalidAudience = 40,
        Microsoft_Dynamics_Commerce_Runtime_InvalidIssuer = 41,
        Microsoft_Dynamics_Commerce_Runtime_TenantIdNotFound = 42,
        Microsoft_Dynamics_Commerce_Runtime_AADTokenIssuedForDifferentEnvironment = 43,
        Microsoft_Dynamics_Commerce_Runtime_InvalidAADTenantId = 44,
        Microsoft_Dynamics_Commerce_Runtime_UserBlockedDueToTooManyFailedLogonAttempts = 45,
        Microsoft_Dynamics_Commerce_Runtime_UserPasswordExpired = 46,
        Microsoft_Dynamics_Commerce_Runtime_CheckOutNotOverHTTPS = 47,
        Microsoft_Dynamics_Commerce_Runtime_AttemptToActivateFromDifferentPhysicalDevice = 48,
        Microsoft_Dynamics_Commerce_Runtime_InternalServerError = 49,
        Microsoft_Dynamics_Commerce_Runtime_DeviceActivationNotAllowedWithUserTokenIssuer = 50,
        Microsoft_Dynamics_Commerce_Runtime_PasswordComplexityRequirementsNotMet = 51,
        Microsoft_Dynamics_Commerce_Runtime_PasswordHistoryRequirementsNotMet = 52,
        Microsoft_Dynamics_Commerce_Runtime_ReturnItemPriceExceeded = 53,
        Microsoft_Dynamics_Commerce_Runtime_ReturnTransactionTotalExceeded = 54,
        Microsoft_Dynamics_Commerce_Runtime_CredentialsNotConfigured = 55
    }
    enum StorageErrors {
        None = 0,
        Microsoft_Dynamics_Commerce_Runtime_CriticalStorageError = 1,
        Microsoft_Dynamics_Commerce_Runtime_UnexpectedNumberOfRowsError = 2,
        Microsoft_Dynamics_Commerce_Runtime_ObjectVersionMismatchError = 3,
        Microsoft_Dynamics_Commerce_Runtime_StorageRequestTimeout = 4
    }
    enum VersionNotSupportedErrors {
        None = 0,
        Microsoft_Dynamics_Commerce_Runtime_RetailServerApiVersionNotSupported = 1
    }
    enum PaymentErrors {
        None = 0,
        Microsoft_Dynamics_Commerce_Runtime_UnableToCapturePayment = 1,
        Microsoft_Dynamics_Commerce_Runtime_UnableToAuthorizePayment = 2,
        Microsoft_Dynamics_Commerce_Runtime_UnableToRefundPayment = 3,
        Microsoft_Dynamics_Commerce_Runtime_UnableToCancelPayment = 4,
        Microsoft_Dynamics_Commerce_Runtime_UnableToGetCardPaymentAcceptPoint = 5,
        Microsoft_Dynamics_Commerce_Runtime_UnableToRetrieveCardPaymentAcceptResult = 6,
        Microsoft_Dynamics_Commerce_Runtime_InvalidCashBackAmount = 7,
        Microsoft_Dynamics_Commerce_Runtime_ManualCardNumberNotAllowed = 8,
        Microsoft_Dynamics_Commerce_Runtime_TenderLineCannotBeVoided = 9,
        Microsoft_Dynamics_Commerce_Runtime_InvalidPaymentRequest = 10,
        Microsoft_Dynamics_Commerce_Runtime_PaymentAlreadyVoided = 11,
        Microsoft_Dynamics_Commerce_Runtime_InvalidLoyaltyCardNumber = 12,
        Microsoft_Dynamics_Commerce_Runtime_GiftCardCurrencyMismatch = 13,
        Microsoft_Dynamics_Commerce_Runtime_PaymentAmountExceedsGiftBalance = 14,
        Microsoft_Dynamics_Commerce_Runtime_BlockedLoyaltyCard = 15,
        Microsoft_Dynamics_Commerce_Runtime_NoTenderLoyaltyCard = 16,
        Microsoft_Dynamics_Commerce_Runtime_NotEnoughRewardPoints = 17,
        Microsoft_Dynamics_Commerce_Runtime_RefundAmountMoreThanAllowed = 18,
        Microsoft_Dynamics_Commerce_Runtime_NoMoreThanOneLoyaltyTender = 19,
        Microsoft_Dynamics_Commerce_Runtime_PaymentUsingUnauthorizedAccount = 20,
        Microsoft_Dynamics_Commerce_Runtime_CustomerAccountPaymentIsNotAllowedForCustomerOrderDepositAndCancellation = 21,
        Microsoft_Dynamics_Commerce_Runtime_PaymentRequiresMerchantProperties = 22,
        Microsoft_Dynamics_Commerce_Runtime_CustomerAccountPaymentExceedsTotalAmountForCarryOutItems = 23
    }
    enum CommerceDataExchangeErrors {
        None = 0,
        Microsoft_Dynamics_Commerce_Runtime_CdxDataPackageApplicationFailure = 1
    }
    enum WrongEndpointErrors {
        None = 0,
        Microsoft_Dynamics_Commerce_WrongEndpoint = 1
    }
    enum RetailServerApiErrors {
        None = 0,
        Microsoft_Dynamics_Internal_Server_Error = 1
    }
    enum ExceptionSeverity {
        None = 0,
        Error = 1,
        Warning = 2,
        Critical = 3,
        Informational = 4
    }
    interface Category {
        RecordId: number;
        OfflineImage?: string;
        Name?: string;
        ParentCategory?: number;
        Images?: Entities.MediaLocation[];
        NameTranslations?: Entities.TextValueTranslation[];
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface Cart {
        AffiliationLines?: Entities.AffiliationLoyaltyTier[];
        IsRequiredAmountPaid?: boolean;
        IsDiscountFullyCalculated?: boolean;
        IgnoreDiscountCalculation?: boolean;
        AmountDue?: number;
        AmountPaid?: number;
        AttributeValues?: Entities.AttributeValueBase[];
        BeginDateTime?: Date;
        BusinessDate?: Date;
        CancellationChargeAmount?: number;
        EstimatedShippingAmount?: number;
        CartLines?: Entities.CartLine[];
        CartTypeValue?: number;
        ChannelId?: number;
        ChargeAmount?: number;
        CustomerOrderRemainingBalance?: number;
        ChargeLines?: Entities.ChargeLine[];
        TaxViewLines?: Entities.TaxViewLine[];
        Comment?: string;
        InvoiceComment?: string;
        Coupons?: Entities.Coupon[];
        CustomerId?: string;
        CustomerOrderModeValue?: number;
        DeliveryMode?: string;
        DeliveryModeChargeAmount?: number;
        DiscountAmount?: number;
        DiscountAmountWithoutTax?: number;
        DiscountCodes?: string[];
        Id: string;
        SuspendedCartId?: string;
        TransactionTypeValue?: number;
        CustomerAccountDepositLines?: Entities.CustomerAccountDepositLine[];
        IncomeExpenseLines?: Entities.IncomeExpenseLine[];
        IncomeExpenseTotalAmount?: number;
        IsReturnByReceipt?: boolean;
        ReturnTransactionHasLoyaltyPayment?: boolean;
        IsFavorite?: boolean;
        IsRecurring?: boolean;
        IsSuspended?: boolean;
        LoyaltyCardId?: string;
        ModifiedDateTime?: Date;
        Name?: string;
        OrderNumber?: string;
        AvailableDepositAmount?: number;
        OverriddenDepositAmount?: number;
        OverriddenDepositWithoutCarryoutAmount?: number;
        PrepaymentAmountPaid?: number;
        PrepaymentAppliedOnPickup?: number;
        PromotionLines?: string[];
        QuotationExpiryDate?: Date;
        ReasonCodeLines?: Entities.ReasonCodeLine[];
        ReceiptEmail?: string;
        RequestedDeliveryDate?: Date;
        RequiredDepositAmount?: number;
        RequiredDepositWithoutCarryoutAmount?: number;
        SalesId?: string;
        ShippingAddress?: Entities.Address;
        StaffId?: string;
        SubtotalAmount?: number;
        SubtotalAmountWithoutTax?: number;
        NetPrice?: number;
        SubtotalSalesAmount?: number;
        TaxAmount?: number;
        TaxOnCancellationCharge?: number;
        TaxOverrideCode?: string;
        TenderLines?: Entities.TenderLine[];
        TerminalId?: string;
        TotalAmount?: number;
        TotalSalesAmount?: number;
        TotalReturnAmount?: number;
        TotalCarryoutSalesAmount?: number;
        TotalCustomerOrderSalesAmount?: number;
        TotalManualDiscountAmount?: number;
        TotalManualDiscountPercentage?: number;
        WarehouseId?: string;
        IsCreatedOffline?: boolean;
        CartStatusValue?: number;
        ReceiptTransactionTypeValue?: number;
        CommissionSalesGroup?: string;
        Version?: number;
        TotalItems?: number;
        HasTaxCalculationTriggered?: boolean;
        MerchantProperties?: Entities.PaymentMerchantInformation[];
        HasChargeCalculationTriggered?: boolean;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface Customer {
        AccountNumber: string;
        RecordId?: number;
        CreatedDateTime?: Date;
        ChargeGroup?: string;
        PriceGroup?: string;
        IsCustomerTaxInclusive?: boolean;
        Phone?: string;
        PhoneRecordId?: number;
        PhoneExt?: string;
        Cellphone?: string;
        Email?: string;
        EmailRecordId?: number;
        Url?: string;
        UrlRecordId?: number;
        Name?: string;
        PersonNameId?: number;
        FirstName?: string;
        MiddleName?: string;
        LastName?: string;
        DirectoryPartyRecordId?: number;
        PartyNumber?: string;
        CustomerTypeValue?: number;
        Language?: string;
        CustomerGroup?: string;
        CurrencyCode?: string;
        CNPJCPFNumber?: string;
        IdentificationNumber?: string;
        InvoiceAccount?: string;
        MandatoryCreditLimit?: boolean;
        CreditRating?: string;
        CreditLimit?: number;
        Balance?: number;
        Blocked?: boolean;
        BlockedType?: number;
        UseOrderNumberReference?: boolean;
        OrganizationId?: string;
        UsePurchaseRequest?: boolean;
        MultilineDiscountGroup?: string;
        TotalDiscountGroup?: string;
        LineDiscountGroup?: string;
        TaxGroup?: string;
        SalesTaxGroup?: string;
        TaxExemptNumber?: string;
        VatNumber?: string;
        TaxOffice?: string;
        NonChargeableAccount?: boolean;
        Tag?: string;
        ReceiptSettings?: number;
        ReceiptEmail?: string;
        RetailCustomerTableRecordId?: number;
        OfflineImage?: string;
        IsAsyncCustomer?: boolean;
        NewCustomerPartyNumber?: string;
        CustomerAffiliations?: Entities.CustomerAffiliation[];
        Addresses?: Entities.Address[];
        Attributes?: Entities.CustomerAttribute[];
        Images?: Entities.MediaLocation[];
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface Employee {
        StaffId: string;
        NameOnReceipt?: string;
        Name?: string;
        CultureName?: string;
        NumberOfDaysToPasswordExpiry?: number;
        Permissions?: Entities.EmployeePermissions;
        Images?: Entities.MediaLocation[];
        DefaultImage?: string;
        DefaultCommissionSalesGroup?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface SalesOrder {
        DocumentStatusValue?: number;
        RecordId?: number;
        StatusValue?: number;
        AffiliationLoyaltyTierLines?: Entities.SalesAffiliationLoyaltyTier[];
        IsRequiredAmountPaid?: boolean;
        IsDiscountFullyCalculated?: boolean;
        IgnoreDiscountCalculation?: boolean;
        AmountDue?: number;
        EstimatedShippingAmount?: number;
        AmountPaid?: number;
        CustomerOrderRemainingBalance?: number;
        AttributeValues?: Entities.AttributeValueBase[];
        AvailableDepositAmount?: number;
        BeginDateTime?: Date;
        CreatedDateTime?: Date;
        BusinessDate?: Date;
        CalculatedDepositAmount?: number;
        CancellationCharge?: number;
        ChannelId?: number;
        ChannelReferenceId?: string;
        ChargeAmount?: number;
        ChargeLines?: Entities.ChargeLine[];
        Comment?: string;
        Coupons?: Entities.Coupon[];
        InvoiceComment?: string;
        ContactInformationCollection?: Entities.ContactInformation[];
        CurrencyCode?: string;
        CustomerAccountDepositLines?: Entities.CustomerAccountDepositLine[];
        CustomerId?: string;
        CustomerOrderModeValue?: number;
        CustomerOrderTypeValue?: number;
        DeliveryMode?: string;
        DeliveryModeChargeAmount?: number;
        DiscountAmount?: number;
        DiscountAmountWithoutTax?: number;
        NetPrice?: number;
        DiscountCodes?: string[];
        EntryStatusValue?: number;
        GrossAmount?: number;
        HasLoyaltyPayment?: boolean;
        Id: string;
        SuspendedTransactionId?: string;
        IncomeExpenseLines?: Entities.IncomeExpenseLine[];
        IncomeExpenseTotalAmount?: number;
        InventoryLocationId?: string;
        IsCreatedOffline?: boolean;
        IsReturnByReceipt?: boolean;
        IsSuspended?: boolean;
        IsTaxIncludedInPrice?: boolean;
        LineDiscount?: number;
        LineDiscountCalculationTypeValue?: number;
        LoyaltyCardId?: string;
        LoyaltyDiscountAmount?: number;
        LoyaltyManualDiscountAmount?: number;
        LoyaltyRewardPointLines?: Entities.LoyaltyRewardPointLine[];
        ModifiedDateTime?: Date;
        Name?: string;
        NetAmount?: number;
        NetAmountWithoutTax?: number;
        NetAmountWithNoTax?: number;
        NetAmountWithTax?: number;
        NumberOfItems?: number;
        OverriddenDepositAmount?: number;
        OverriddenDepositWithoutCarryoutAmount?: number;
        PeriodicDiscountAmount?: number;
        PrepaymentAmountAppliedOnPickup?: number;
        PrepaymentAmountInvoiced?: number;
        PrepaymentAmountPaid?: number;
        QuotationExpiryDate?: Date;
        ReasonCodeLines?: Entities.ReasonCodeLine[];
        ReceiptEmail?: string;
        ReceiptId?: string;
        RequestedDeliveryDate?: Date;
        RequiredDepositAmount?: number;
        RequiredDepositWithoutCarryoutAmount?: number;
        ReturnTransactionHasLoyaltyPayment?: boolean;
        SalesId?: string;
        SalesPaymentDifference?: number;
        SalesLines?: Entities.SalesLine[];
        ShiftId?: number;
        ShiftTerminalId?: string;
        ShippingAddress?: Entities.Address;
        StaffId?: string;
        StatementCode?: string;
        StoreId?: string;
        SubtotalAmount?: number;
        SubtotalAmountWithoutTax?: number;
        SubtotalSalesAmount?: number;
        TaxAmount?: number;
        TaxAmountExclusive?: number;
        TaxAmountInclusive?: number;
        TaxLines?: Entities.TaxLine[];
        TaxOnCancellationCharge?: number;
        TaxOverrideCode?: string;
        TenderLines?: Entities.TenderLine[];
        TerminalId?: string;
        TotalAmount?: number;
        TotalSalesAmount?: number;
        TotalReturnAmount?: number;
        TotalCarryoutSalesAmount?: number;
        TotalCustomerOrderSalesAmount?: number;
        TotalDiscount?: number;
        TotalManualDiscountAmount?: number;
        TotalManualDiscountPercentage?: number;
        TransactionTypeValue?: number;
        TaxCalculationTypeValue?: number;
        SalesInvoiceAmount?: number;
        GiftCardActiveFrom?: Date;
        GiftCardBalance?: number;
        GiftCardExpireDate?: Date;
        GiftCardHistoryDetails?: string;
        GiftCardIssueAmount?: number;
        GiftCardIdMasked?: string;
        CommissionSalesGroup?: string;
        HasTaxCalculationTriggered?: boolean;
        HasChargeCalculationTriggered?: boolean;
        FiscalTransactions?: Entities.FiscalTransaction[];
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface Shift {
        ShiftId: number;
        TerminalId: string;
        StartingAmountTotal: number;
        FloatingEntryAmountTotal: number;
        AddToTenderAmountTotal: number;
        SafeDropTotal: number;
        BankDropTotal: number;
        RemoveTenderAmountTotal: number;
        DeclareTenderAmountTotal: number;
        OverShortTotal: number;
        TenderedTotal: number;
        ChangeTotal: number;
        IncomeAccountTotal: number;
        ExpenseAccountTotal: number;
        CashDrawer?: string;
        StoreRecordId?: number;
        StoreId?: string;
        StaffId?: string;
        CurrentStaffId?: string;
        StatusValue?: number;
        StartDateTime?: Date;
        CloseDateTime?: Date;
        ClosedAtTerminalId?: string;
        CurrentTerminalId?: string;
        SalesTotal?: number;
        StatusDateTime?: Date;
        ReturnsTotal?: number;
        PaidToAccountTotal?: number;
        TaxTotal?: number;
        ChargeTotal?: number;
        DiscountTotal?: number;
        RoundedAmountTotal?: number;
        CustomerCount?: number;
        SaleTransactionCount?: number;
        NoSaleTransactionCount?: number;
        VoidTransactionCount?: number;
        LogOnTransactionCount?: number;
        SuspendedTransactionCount?: number;
        TransactionCount?: number;
        ReceiptsCount?: number;
        ReturnsCount?: number;
        GoodsSoldQty?: number;
        ServicesSoldQty?: number;
        ReceiptCopiesCount?: number;
        ReceiptCopiesTotal?: number;
        PriceOverrideTotal?: number;
        SuspendedTotal?: number;
        SalesTotalIncludingTax?: number;
        SalesTotalExcludingTax?: number;
        SalesGrandTotal?: number;
        ReturnsGrandTotal?: number;
        TaxLines?: Entities.ShiftTaxLine[];
        TenderLines?: Entities.ShiftTenderLine[];
        AccountLines?: Entities.ShiftAccountLine[];
        IsShared?: boolean;
        GiftCardsTotal?: number;
        GiftCardCashOutTotal?: number;
        VoidedSalesTotal?: number;
        ShiftSalesTotal?: number;
        ShiftReturnsTotal?: number;
        NumberOfUnreconciledLines?: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface StockCountJournal {
        JournalId: string;
        RecordId?: string;
        Description?: string;
        InventLocationId?: string;
        DataAreaId?: string;
        StockCountTransactionLines?: Entities.StockCountJournalTransaction[];
        Worker?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface OrgUnit {
        OrgUnitNumber: string;
        RecordId: number;
        InventoryLocationId?: string;
        OMOperatingUnitNumber?: string;
        TaxGroup?: string;
        FunctionalityProfileId?: string;
        UseCustomerBasedTax?: boolean;
        UseDestinationBasedTax?: boolean;
        Currency?: string;
        OrgUnitAddress?: Entities.Address;
        OrgUnitFullAddress?: string;
        OrgUnitName?: string;
        Latitude?: number;
        Longitude?: number;
        EmailReceiptProfileId?: string;
        ShippingWarehouseAddress?: Entities.Address;
        DefaultCustomerAccount?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface Product {
        RecordId: number;
        ProductName?: string;
        ProductNumber?: string;
        Description?: string;
        IsMasterProduct: boolean;
        IsKit: boolean;
        ItemId?: string;
        HasLinkedProducts: boolean;
        Rules: Entities.ProductRules;
        DefaultUnitOfMeasure?: string;
        Name?: string;
        Locale?: string;
        OfflineImage?: string;
        IsRemote?: boolean;
        ChangeTrackingInformation?: Entities.ProductChangeTrackingInformation;
        Image?: Entities.RichMediaLocations;
        UnitsOfMeasureSymbol?: string[];
        LinkedProducts?: Entities.LinkedProduct[];
        BasePrice?: number;
        Price?: number;
        AdjustedPrice?: number;
        RetailContext?: Entities.ProjectionDomain;
        PrimaryCategoryId?: number;
        CategoryIds?: number[];
        RelatedProducts?: Entities.RelatedProduct[];
        ProductsRelatedToThis?: Entities.RelatedProduct[];
        ProductSchema?: string[];
        ProductProperties?: Entities.ProductPropertyTranslation[];
        CompositionInformation?: Entities.ProductCompositionInformation;
        ParentKits?: Entities.KitComponent[];
        SearchName?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface ProductCatalog {
        RecordId: number;
        Name?: string;
        Description?: string;
        Language?: string;
        IsSnapshotEnabled: boolean;
        ValidFrom: Date;
        ValidTo: Date;
        CreatedOn: Date;
        ModifiedOn: Date;
        PublishedOn: Date;
        Images?: Entities.MediaLocation[];
        ChannelId?: number;
        DefaultImage?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface CommerceList {
        Id: number;
        Name?: string;
        CustomerId?: string;
        CustomerName?: string;
        IsFavorite?: boolean;
        IsRecurring?: boolean;
        IsPrivate?: boolean;
        IsCollaborative?: boolean;
        CreatedDateTime?: Date;
        DueDateTime?: Date;
        CommerceListTypeValue?: number;
        CommerceListLines?: Entities.CommerceListLine[];
        CommerceListContributors?: Entities.CommerceListContributor[];
        CommerceListInvitations?: Entities.CommerceListInvitation[];
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface TransferOrder {
        OrderId: string;
        RecordId?: string;
        Status?: string;
        Lines?: number;
        TotalItems?: number;
        OrderTypeValue?: number;
        InventLocationIdFrom?: string;
        InventLocationIdTo?: string;
        QuantityShipped?: number;
        QuantityReceived?: number;
        QuantityShipNow?: number;
        QuantityReceiveNow?: number;
        QuantityShipRemaining?: number;
        QuantityReceiveRemaining?: number;
        ShipDate?: Date;
        ReceiveDate?: Date;
        DeliveryModeId?: string;
        OrderLines?: Entities.TransferOrderLine[];
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface PurchaseOrder {
        OrderId: string;
        RecordId?: string;
        Status?: string;
        Lines?: number;
        TotalItems?: number;
        OrderTypeValue?: number;
        TotalReceived?: number;
        OrderLines?: Entities.PurchaseOrderLine[];
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface PickingList {
        OrderId: string;
        RecordId?: string;
        Status?: string;
        Lines?: number;
        TotalItems?: number;
        OrderTypeValue?: number;
        InventLocationId?: string;
        DeliveryDate?: Date;
        DeliveryMode?: string;
        TotalReceived?: number;
        OrderLines?: Entities.PickingListLine[];
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface Warehouse {
        InventLocation: string;
        Name?: string;
        IsWMSEnabled: boolean;
        DefaultInventoryStatus?: string;
        DefaultReceiptLocation?: string;
        DefaultLocationId?: string;
        DefaultIssueLocation?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface ScanResult {
        ScannedText: string;
        MaskTypeValue?: number;
        Barcode?: Entities.Barcode;
        Product?: Entities.SimpleProduct;
        LoyaltyCard?: Entities.LoyaltyCard;
        GiftCard?: Entities.GiftCard;
        ExtensionProperties?: Entities.CommerceProperty[];
        Customer?: Entities.Customer;
    }
    interface OrderShipments {
        SalesId: string;
        Shipments?: Entities.Shipment[];
        SalesLines?: Entities.SalesLine[];
        CreatedDateTime?: Date;
        Status?: string;
        CurrencyCode?: string;
        CustomerId?: string;
        DeliveryMode?: string;
        GrossAmount?: number;
        InventoryLocationId?: string;
        ReceiptId?: string;
        RequestedDeliveryDate?: Date;
        TotalAmount?: number;
        TaxAmount?: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface SuspendedCart {
        Id: string;
        ReceiptId?: string;
        ShiftId?: number;
        ShiftTerminalId?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
        Cart?: Entities.Cart;
    }
    interface ExtensibleEnumeration {
        Name: string;
        Value: number;
    }
    interface ExtensibleEnumeration_1OfT extends ExtensibleEnumeration {
    }
    interface ExtensibleTransactionType extends ExtensibleEnumeration {
    }
    interface ExtensibleSalesTransactionType extends ExtensibleEnumeration {
    }
    interface FulfillmentLineStatus extends ExtensibleEnumeration {
    }
    interface FulfillmentLineDeliveryType extends ExtensibleEnumeration {
    }
    interface ExtensibleAddressType extends ExtensibleEnumeration {
    }
    interface ExtensibleLoyaltyRewardPointActivityEntryType extends ExtensibleEnumeration {
    }
    interface Address {
        Name?: string;
        FullAddress?: string;
        RecordId?: number;
        Street?: string;
        StreetNumber?: string;
        County?: string;
        CountyName?: string;
        City?: string;
        DistrictName?: string;
        State?: string;
        StateName?: string;
        ZipCode?: string;
        ThreeLetterISORegionName?: string;
        Phone?: string;
        PhoneRecordId?: number;
        PhoneExt?: string;
        Email?: string;
        EmailContent?: string;
        EmailRecordId?: number;
        Url?: string;
        UrlRecordId?: number;
        TwoLetterISORegionName?: string;
        Deactivate?: boolean;
        AttentionTo?: string;
        BuildingCompliment?: string;
        Postbox?: string;
        TaxGroup?: string;
        AddressTypeValue?: number;
        IsPrimary?: boolean;
        IsPrivate?: boolean;
        PartyNumber?: string;
        IsAsyncAddress?: boolean;
        DirectoryPartyTableRecordId?: number;
        DirectoryPartyLocationRecordId?: number;
        DirectoryPartyLocationRoleRecordId?: number;
        LogisticsLocationId?: string;
        LogisticsLocationRecordId?: number;
        LogisticsLocationExtRecordId?: number;
        LogisticsLocationRoleRecordId?: number;
        PhoneLogisticsLocationRecordId?: number;
        PhoneLogisticsLocationId?: string;
        EmailLogisticsLocationRecordId?: number;
        EmailLogisticsLocationId?: string;
        UrlLogisticsLocationRecordId?: number;
        UrlLogisticsLocationId?: string;
        ExpireRecordId?: number;
        SortOrder?: number;
        RoleCount?: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface CustomerAffiliation {
        RecordId?: number;
        RetailAffiliationId?: number;
        Name?: string;
        Description?: string;
        HideInChannels?: boolean;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface CustomerBalances {
        Balance: number;
        PendingBalance: number;
        CreditLimit: number;
        InvoiceAccountBalance: number;
        InvoiceAccountPendingBalance: number;
        InvoiceAccountCreditLimit: number;
    }
    interface GlobalCustomer {
        PartyNumber?: string;
        RecordId?: number;
        IsAsyncCustomer?: boolean;
        AccountNumber?: string;
        FullName?: string;
        FullAddress?: string;
        Phone?: string;
        Email?: string;
        CustomerTypeValue?: number;
        Images?: Entities.MediaLocation[];
        OfflineImage?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface AttributeValue {
        Name?: string;
        UnitOfMeasureSymbol?: string;
        DataTypeValue?: number;
        BooleanValue?: boolean;
        DateTimeOffsetValue?: Date;
        FloatValue?: number;
        IntegerValue?: number;
        TextValue?: string;
        CurrencyValue?: number;
        CurrencyCode?: string;
        AttributeValueId?: number;
        RecordId?: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface AttributeValueBase {
        Name?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface Barcode {
        BarcodeId?: string;
        BarcodePrice?: number;
        Quantity?: number;
        CustomerId?: string;
        EmployeeId?: string;
        SalespersonId?: string;
        EANLicenseId?: string;
        DataEntry?: string;
        DiscountCode?: string;
        GiftCardNumber?: string;
        LoyaltyCardNumber?: string;
        ItemBarcode?: Entities.ItemBarcode;
        EntryMethodTypeValue?: number;
        ItemType?: number;
        EnterDimensions?: boolean;
        ItemGroupId?: string;
        ItemDepartmentId?: string;
        ScaleItem?: boolean;
        ZeroPriceValid?: boolean;
        NegativeQuantity?: boolean;
        DiscountNotAllowed?: boolean;
        DateToBeBlocked?: Date;
        DateToBeActivated?: Date;
        CheckDigitValidated?: boolean;
        CouponId?: string;
        Message?: string;
        LineDiscountGroup?: string;
        MultilineDiscountGroup?: string;
        IncludedInTotalDiscount?: boolean;
        CostPrice?: number;
        BatchId?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface ItemBarcode {
        RecordId?: number;
        ItemId?: string;
        Description?: string;
        BarcodeSetupId?: string;
        ItemBarcodeValue?: string;
        InventoryDimensionId?: string;
        IsBlocked?: boolean;
        Display?: boolean;
        VariantId?: string;
        UnitId?: string;
        UseForInput?: boolean;
        UseForPrinting?: boolean;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface ButtonGrid {
        Id?: string;
        Name?: string;
        DefaultColor?: number;
        SpaceBetweenButtonsInPixels?: number;
        Buttons?: Entities.ButtonGridButton[];
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface GetButtonGridsByIdsCriteria {
        ButtonGridIds?: string[];
    }
    interface CartLine {
        LineId?: string;
        TaxOverrideCode?: string;
        ItemId?: string;
        Barcode?: string;
        EntryMethodTypeValue?: number;
        Description?: string;
        InventoryDimensionId?: string;
        Comment?: string;
        ProductId?: number;
        WarehouseId?: string;
        Quantity?: number;
        Price?: number;
        ExtendedPrice?: number;
        TaxAmount?: number;
        ItemTaxGroupId?: string;
        TotalAmount?: number;
        NetAmountWithoutTax?: number;
        NetPrice?: number;
        DiscountAmountWithoutTax?: number;
        DiscountAmount?: number;
        LineDiscount?: number;
        LinePercentageDiscount?: number;
        LineManualDiscountPercentage?: number;
        LineManualDiscountAmount?: number;
        UnitOfMeasureSymbol?: string;
        ShippingAddress?: Entities.Address;
        DeliveryMode?: string;
        DeliveryModeChargeAmount?: number;
        RequestedDeliveryDate?: Date;
        ReturnTransactionId?: string;
        ReturnLineNumber?: number;
        ReturnInventTransId?: string;
        IsVoided?: boolean;
        IsTaxOverideCodeTaxExempt?: boolean;
        IsGiftCardLine?: boolean;
        IsPriceKeyedIn?: boolean;
        GiftCardId?: string;
        GiftCardCurrencyCode?: string;
        GiftCardOperationValue?: number;
        SalesStatusValue?: number;
        QuantityOrdered?: number;
        QuantityInvoiced?: number;
        QuantityCanceled?: number;
        FulfillmentStoreId?: string;
        SerialNumber?: string;
        ElectronicDeliveryEmail?: string;
        ElectronicDeliveryEmailContent?: string;
        IsPriceOverridden?: boolean;
        OriginalPrice?: number;
        IsInvoiceLine?: boolean;
        InvoiceId?: string;
        InvoiceAmount?: number;
        GiftCardBalance?: number;
        LineVersion?: number;
        PromotionLines?: string[];
        DiscountLines?: Entities.DiscountLine[];
        RelatedDiscountedLineIds?: string[];
        ReasonCodeLines?: Entities.ReasonCodeLine[];
        ChargeLines?: Entities.ChargeLine[];
        TaxRatePercent?: number;
        IsCustomerAccountDeposit?: boolean;
        LinkedParentLineId?: string;
        QuantityReturnable?: number;
        ExtensionProperties?: Entities.CommerceProperty[];
        LineNumber?: number;
        CommissionSalesGroup?: string;
        TrackingId?: string;
        StaffId?: string;
        QuantityRemained?: number;
        QuantityShipped?: number;
        CatalogId?: number;
        AttributeValues?: Entities.AttributeValueBase[];
        ThirdPartyGiftCardInfo?: Entities.ThirdPartyGiftCardInfo;
        BarcodeEmbeddedPrice?: number;
        PriceInBarcode?: boolean;
        InvoiceTypeValue?: number;
        InvoicedSalesId?: string;
    }
    interface ThirdPartyGiftCardInfo {
        Amount?: number;
        Authorization?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface CardTypeInfo {
        RecordId?: number;
        TypeId?: string;
        Name?: string;
        PaymentMethodId?: string;
        CardTypeValue?: number;
        Issuer?: string;
        NumberFrom?: string;
        NumberTo?: string;
        CashBackLimit?: number;
        AllowManualInput?: boolean;
        CheckModulus?: boolean;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface CashDeclaration {
        RecordId?: number;
        Currency?: string;
        Amount?: number;
        CashTypeValue?: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface IncomeExpenseAccount {
        Amount?: number;
        AccountNumber?: string;
        AccountName?: string;
        AccountNameAlias?: string;
        AccountTypeValue?: number;
        Quantity?: number;
        Message1Line?: string;
        Message2Line?: string;
        SlipText1Line?: string;
        SlipText2Line?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface IncomeExpenseLine {
        Amount?: number;
        IncomeExpenseAccount?: string;
        StoreNumber?: string;
        AccountTypeValue?: number;
        Terminal?: string;
        Shift?: string;
        TransactionStatusValue?: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface CartTenderLine {
        PaymentCard?: Entities.PaymentCard;
        TokenizedPaymentCard?: Entities.TokenizedPaymentCard;
        TenderLineId?: string;
        Amount?: number;
        CashBackAmount?: number;
        AmountInTenderedCurrency?: number;
        AmountInCompanyCurrency?: number;
        Currency?: string;
        ExchangeRate?: number;
        CompanyCurrencyExchangeRate?: number;
        TenderTypeId?: string;
        SignatureData?: string;
        ReasonCodeLines?: Entities.ReasonCodeLine[];
        LineNumber?: number;
        GiftCardId?: string;
        CreditMemoId?: string;
        CustomerId?: string;
        LoyaltyCardId?: string;
        CardTypeId?: string;
        IsChangeLine?: boolean;
        IsHistorical?: boolean;
        IsVoidable?: boolean;
        StatusValue?: number;
        VoidStatusValue?: number;
        AuthorizedAmount?: number;
        PaymentRefRecId?: number;
        CardPaymentAccountId?: string;
        ProcessingTypeValue?: number;
        CardProcessorStatusValue?: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface ChargeLine {
        ChargeLineId?: string;
        ChargeCode?: string;
        CurrencyCode?: string;
        ModuleTypeValue?: number;
        ChargeTypeValue?: number;
        ChargeMethodValue?: number;
        CalculatedAmount?: number;
        Value?: number;
        Description?: string;
        TransactionId?: string;
        MarkupAutoTableRecId?: number;
        SaleLineNumber?: number;
        FromAmount?: number;
        ToAmount?: number;
        Keep?: number;
        AmountRefunded?: number;
        ChargeLineOverrides?: Entities.ChargeLineOverride[];
        ReasonCodeLines?: Entities.ReasonCodeLine[];
        IsRefundable?: boolean;
        IsShipping?: boolean;
        ItemId?: string;
        Quantity?: number;
        Price?: number;
        ItemTaxGroupId?: string;
        SalesTaxGroupId?: string;
        OriginalSalesTaxGroupId?: string;
        OriginalItemTaxGroupId?: string;
        TaxAmount?: number;
        SalesOrderUnitOfMeasure?: string;
        NetAmount?: number;
        NetAmountPerUnit?: number;
        GrossAmount?: number;
        TaxLines?: Entities.TaxLine[];
        TaxMeasures?: Entities.TaxMeasure[];
        TaxAmountExemptInclusive?: number;
        TaxAmountInclusive?: number;
        TaxAmountExclusive?: number;
        NetAmountWithAllInclusiveTax?: number;
        BeginDateTime?: Date;
        EndDateTime?: Date;
        TaxRatePercent?: number;
        IsReturnByReceipt?: boolean;
        ReturnLineTaxAmount?: number;
        ReturnTaxLines?: Entities.TaxLine[];
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface CityInfo {
        Name?: string;
        Description?: string;
        CountryRegionId?: string;
        StateId?: string;
        CountyId?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface CommissionSalesGroup {
        GroupId?: string;
        Name?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface ContactInformation {
        Value?: string;
        ContactInformationTypeValue?: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface AttributeCategory {
        Value?: Entities.CommercePropertyValue;
        RecordId?: number;
        Name?: string;
        KeyName?: string;
        DataTypeValue?: number;
        NameTranslations?: Entities.TextValueTranslation[];
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface ProductComparisonEntry {
        ProductId: number;
        AttributeValue?: Entities.AttributeValue;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface ProductComparisonLine {
        AttributeRecordId: number;
        AttributeName?: string;
        ProductAttributeComparisonEntries?: Entities.ProductComparisonEntry[];
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface CustomerSearchField {
        IsShortcut?: boolean;
        DisplayName?: string;
        CanBeRefined?: boolean;
        SearchField?: Entities.CustomerSearchFieldType;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface CustomerSearchByFieldCriteria {
        Criteria?: Entities.CustomerSearchByFieldCriterion[];
        DataLevelValue?: number;
    }
    interface CustomerSearchByFieldCriterion {
        SearchTerm?: string;
        SearchField?: Entities.CustomerSearchFieldType;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface CustomerSearchFieldType extends ExtensibleEnumeration {
    }
    interface Shipment {
        SalesId?: string;
        ShipmentId?: string;
        DeliveryAddress?: Entities.Address;
        ShipDate?: Date;
        DeliveryMode?: string;
        TermsOfDelivery?: string;
        WeightUnit?: string;
        TrackingNumber?: string;
        TrackingUrl?: string;
        LatestCarrierTrackingInfo?: Entities.TrackingInfo;
        CarrierId?: string;
        CarrierName?: string;
        ShippingWeight?: number;
        ShipmentLines?: Entities.ShipmentLine[];
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface ShipmentLine {
        ShipmentLineId?: string;
        ItemId?: string;
        Description?: string;
        InventDimId?: string;
        OrderedQuantity?: number;
        DeliveredQuantity?: number;
        RemainingQuantity?: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface Transaction {
        Id?: string;
        StoreId?: string;
        TerminalId?: string;
        IsCreatedOffline?: boolean;
        StaffId?: string;
        ShiftId?: string;
        ShiftTerminalId?: string;
        Description?: string;
        ReceiptId?: string;
        GrossAmount?: number;
        TotalAmount?: number;
        CreatedDateTime?: Date;
        TransactionTypeValue?: number;
        TransactionStatusValue?: number;
        BeginDateTime?: Date;
        GiftCardActiveFrom?: Date;
        GiftCardBalance?: number;
        GiftCardExpireDate?: Date;
        GiftCardHistoryDetails?: string;
        GiftCardIssueAmount?: number;
        GiftCardIdMasked?: string;
        FromSafe?: string;
        ToSafe?: string;
        FromShiftTerminalId?: string;
        ToShiftTerminalId?: string;
        FromShiftId?: string;
        TransactionSourceContextTypeValue?: number;
        TransactionDestinationContextTypeValue?: number;
        ToShiftId?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface ShiftReconciliationLine extends Transaction {
        GroupId?: number;
        GroupDescription?: string;
        ShiftGroupLinesCount?: number;
        ShiftGroupLinesClosedCount?: number;
    }
    interface ShiftReconciliationLineRetrievalCriteria {
        TransactionTypeValues?: number[];
        ShiftReconciliationLineStatusValue?: number;
        Shifts?: Entities.ShiftKey[];
        DestinationShift?: Entities.ShiftKey;
        SourceSafe?: string;
        DestinationSafe?: string;
        TransactionSourceContextTypeValue?: number;
        TransactionDestinationContextTypeValue?: number;
    }
    interface AttributeDefinition {
        RecordId: number;
        Name?: string;
        AttributeTypeName?: string;
        DataType?: string;
        DataTypeValue?: number;
        IsHidden?: boolean;
        IsMandatory?: boolean;
        IsMultiValue?: boolean;
        IsEnumeration?: boolean;
        TranslationDetails?: Entities.AttributeTranslationDetails[];
        EnumerationDetails?: Entities.AttributeEnumeration[];
        DefaultValue?: Entities.CommercePropertyValue;
        UpperBound?: Entities.CommercePropertyValue;
        LowerBound?: Entities.CommercePropertyValue;
        DisplayOrder?: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface AttributeTranslationDetails {
        AttributeRecordId: number;
        LanguageId?: string;
        FriendlyName?: string;
        Description?: string;
        HelpText?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface AttributeEnumeration {
        OrdinalNumber?: number;
        EnumerationValue?: string;
        AttributeEnumerationTranslations?: Entities.AttributeEnumerationTranslation[];
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface AttributeEnumerationTranslation {
        LanguageId?: string;
        EnumerationTranslationValue?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface AttributeDefinitionCriteria {
        AttributeGroupIdentifier?: number;
        Languages?: string[];
    }
    interface AttributeGroupDefinition {
        RecordId: number;
        Name?: string;
        TranslationDetails?: Entities.AttributeGroupTranslationDetails[];
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface AttributeGroupTranslationDetails {
        AttributeGroupRecordId: number;
        LanguageId?: string;
        FriendlyName?: string;
        Description?: string;
        HelpText?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface AttributeGroupDefinitionCriteria {
        AttributeGroupIdentifiers?: number[];
        Languages?: string[];
    }
    interface CountyInfo {
        Name?: string;
        CountyId?: string;
        CountryRegionId?: string;
        StateId?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface CustomerGroup {
        CustomerGroupNumber?: string;
        CustomerGroupName?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface DiscountLine {
        SaleLineNumber?: number;
        OfferId?: string;
        OfferName?: string;
        Amount?: number;
        DiscountCost?: number;
        EffectiveAmount?: number;
        SavedEffectiveAmount?: number;
        Percentage?: number;
        DealPrice?: number;
        DiscountLineTypeValue?: number;
        ManualDiscountTypeValue?: number;
        CustomerDiscountTypeValue?: number;
        PeriodicDiscountTypeValue?: number;
        DiscountApplicationGroup?: string;
        ConcurrencyModeValue?: number;
        IsCompoundable?: boolean;
        DiscountCode?: string;
        PricingPriorityNumber?: number;
        IsDiscountCodeRequired?: boolean;
        ThresholdAmountRequired?: number;
        BundleId?: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface EmployeePermissions {
        PriceOverrideRestrictionValue?: number;
        AllowPriceOverride?: number;
        MaximumDiscountPercentage?: number;
        MaximumLineDiscountAmount?: number;
        MaximumLineReturnAmount?: number;
        MaximumTotalDiscountAmount?: number;
        MaximumTotalDiscountPercentage?: number;
        MaxTotalReturnAmount?: number;
        StaffId?: string;
        Roles?: string[];
        AllowUseSharedShift?: boolean;
        AllowManageSharedShift?: boolean;
        AllowTaskGuides?: boolean;
        AllowSaleOutsideAssortment?: boolean;
        AllowPrintingReceiptCopy?: string;
        AllowSkipFiscalRegistration?: boolean;
        AllowSkipRegistrationOrMarkAsRegistered?: boolean;
        AllowCreateTransferOrder?: boolean;
        AllowAcceptOrder?: boolean;
        AllowRejectOrder?: boolean;
        AllowMassActivation?: boolean;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface CommerceProperty {
        Key?: string;
        Value?: Entities.CommercePropertyValue;
    }
    interface CommercePropertyValue {
        BooleanValue?: boolean;
        ByteValue?: number;
        DateTimeOffsetValue?: Date;
        DecimalValue?: number;
        IntegerValue?: number;
        LongValue?: number;
        StringValue?: string;
    }
    interface CountryRegionInfo {
        CountryRegionId?: string;
        ShortName?: string;
        LongName?: string;
        ISOCode?: string;
        TimeZone?: number;
        LanguageId?: string;
        AddressFormatLines?: Entities.AddressFormattingInfo[];
        AddressFormatId?: string;
        AddressFormatName?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface CreditMemo {
        Id?: string;
        Balance?: number;
        CurrencyCode?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface Currency {
        CurrencyCode?: string;
        CurrencySymbol?: string;
        RoundOffPrice?: number;
        RoundOffSales?: number;
        RoundOffTypePrice?: number;
        RoundOffTypeSales?: number;
        NumberOfDecimals?: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface CurrencyAmount {
        CurrencyCode?: string;
        CurrencySymbol?: string;
        ConvertedAmount?: number;
        RoundedConvertedAmount?: number;
        ExchangeRate?: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface EnvironmentConfiguration {
        EnvironmentId?: string;
        EnvironmentName?: string;
        TenantId?: string;
        ClientAppInsightsInstrumentationKey?: string;
        HardwareStationAppInsightsInstrumentationKey?: string;
        WindowsPhonePosAppInsightsInstrumentationKey?: string;
        BaseVersion?: string;
        ScaleUnit?: Entities.ScaleUnitConfiguration;
    }
    interface DeviceConfiguration {
        UseInMemoryDeviceDataStorage?: boolean;
        AllowItemsAggregation?: boolean;
        AggregateItemsForPrinting?: boolean;
        AggregatePayments?: boolean;
        AlwaysExpandTransactionScreenLineDetails?: boolean;
        AuditEnabled?: boolean;
        DiscountAtTotal?: string;
        ProductDiscount?: string;
        ManuallyCalculateComplexDiscounts?: boolean;
        DisplaySecondaryTotalCurrency?: boolean;
        EndOfTransaction?: string;
        ItemNotOnFile?: string;
        LimitStaffListToStore?: boolean;
        LineItemTaxChange?: string;
        MarkUp?: string;
        MaximumPrice?: number;
        MaximumQuantity?: number;
        MinimumPasswordLength?: number;
        MustKeyInPriceIfZero?: boolean;
        NfcEContingencyModeEnabled?: string;
        NfcEVoided?: string;
        FunctionalityProfileDescription?: string;
        OverridePrice?: string;
        PrintVoidTransactionReceipts?: boolean;
        PrintXZReportsOnTerminal?: boolean;
        PrintTenderDetailsOnXReport?: boolean;
        ProfileId?: string;
        RefundSale?: string;
        ReturnProduct?: string;
        SalesPerson?: string;
        SecondaryTotalCurrency?: string;
        SelectHardwareStationOnTendering?: boolean;
        SerialNumber?: string;
        ShowStaffListAtLogOn?: boolean;
        StaffBarcodeLogOn?: boolean;
        StaffBarcodeLogOnRequiresPassword?: boolean;
        StaffCardLogOn?: boolean;
        StaffCardLogOnRequiresPassword?: boolean;
        StartOfTransaction?: string;
        EnableTimeRegistration?: boolean;
        TenderDeclaration?: string;
        TransactionTaxChange?: string;
        VoidItem?: string;
        VoidPayment?: string;
        SalesModeDefaultsAsCustomerOrder?: boolean;
        CreateOfflineCustomerOrders?: boolean;
        CreateAsyncCustomers?: boolean;
        EnableAxCustomerSearch?: boolean;
        VoidTransaction?: string;
        CultureName?: string;
        SystemLegalTermsUrl?: string;
        SystemPrivacyStatementUrl?: string;
        HideTrainingMode?: boolean;
        StorePhone?: string;
        StatementMethod?: string;
        StoreNumber?: string;
        ChannelId?: number;
        StoreTaxGroup?: string;
        TaxIdNumber?: string;
        TaxOverrideGroup?: number;
        TenderDeclarationCalculation?: number;
        UseCustomerBasedTax?: boolean;
        UseDestinationBasedTax?: boolean;
        AutoLogOffTimeoutInMinutes?: number;
        AutoExitMethodValue?: number;
        CustomerDisplayText1?: string;
        CustomerDisplayText2?: string;
        EFTStoreId?: number;
        EFTTerminalId?: string;
        ExitAfterEachTransaction?: boolean;
        HardwareProfile?: string;
        Placement?: string;
        TerminalDescription?: string;
        OpenDrawer?: string;
        OpenDrawerAtLogOnLogOff?: boolean;
        PrintTaxRefundChecks?: boolean;
        StandAlone?: boolean;
        TerminalId?: string;
        TerminalStatement?: boolean;
        VisualProfile?: string;
        Currency?: string;
        InventLocationId?: string;
        IncludeKitComponents?: boolean;
        AccentColor?: number;
        HeaderColor?: number;
        Theme?: string;
        FontScheme?: number;
        ShowAppBarLabel?: boolean;
        LogOnBackgroundPictureAsBase64?: string;
        LogOnBackgroundPicturePortraitAsBase64?: string;
        BackgroundPictureAsBase64?: string;
        LogonBackgroundPictureId?: number;
        LogonBackgroundPictureIdCompact?: number;
        LogonBackgroundPictureIdPortrait?: number;
        LogonBackgroundPictureIdCompactPortrait?: number;
        BackgroundPictureId?: number;
        RequireAmountDeclaration?: boolean;
        DecimalNotRequiredForMinorCurrencyUnit?: boolean;
        MaxTransactionSearchResults?: number;
        OfflineProfileId?: number;
        NewOfflineDatabaseCheckInterval?: number;
        OfflineTransactionUploadInterval?: number;
        ReconnectToOnlineInterval?: number;
        SwitchToOfflineTimeout?: number;
        RetentionDays?: number;
        HardwareConfigurations?: Entities.HardwareConfigurations;
        CreateRecording?: boolean;
        PlaybackRecording?: boolean;
        ShouldUseDefaultCommisionSalesGroup?: boolean;
        AskForSalesRepresentative?: number;
        IsSalesRepRequired?: boolean;
        ProhibitMixingSalesAndReturns?: boolean;
        ApplyDiscountsToPriceKeyedIn?: boolean;
        ApplyDiscountsToPriceOverrides?: boolean;
        IsProductSuggestionsEnabled?: boolean;
        ProductSearchType?: string;
        DenominationsToDisplayValue?: number;
        PromptOnSeamlessOffline?: boolean;
        RetryCountToOffline?: number;
        RejectOrderFulfillment?: string;
        ManuallyCalculateTaxes?: boolean;
        EmployeeLogonTypeValue?: number;
        StartAmountCalculation?: number;
        BankDropCalculation?: number;
        GenerateLoyaltyCardNumber?: boolean;
        FiscalRegistrationProcessId?: string;
        IncludeSalesOrderInvoices?: boolean;
        IncludeFreeTextInvoices?: boolean;
        IncludeProjectInvoices?: boolean;
        IncludeCreditNoteInvoices?: boolean;
        DisplayTaxExemptInLineDetails?: boolean;
        TaxExemptReceiptIndicator?: string;
        ManuallyCalculateCharges?: boolean;
        ChargeOverrideReasonCode?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface Device {
        ChannelId: number;
        RecordId?: number;
        DeviceNumber?: string;
        DeviceId?: string;
        Description?: string;
        DeviceType?: number;
        TerminalRecordId?: number;
        TerminalId?: string;
        ChannelName?: string;
        UseInMemoryDeviceDataStorage?: boolean;
        AllowMassActivation?: boolean;
        TokenIssueTime?: Date;
        ActivationStatusValue?: number;
        Token?: string;
        CountryRegionIsoCode?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface DiscountCode {
        RecordId: number;
        Barcode?: string;
        Code?: string;
        ConcurrencyMode?: number;
        Description?: string;
        Disclaimer?: string;
        IsDiscountCodeRequired?: boolean;
        Name?: string;
        OfferId?: string;
        IsEnabled?: boolean;
        ValidFrom?: Date;
        ValidTo?: Date;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface DistrictInfo {
        Name?: string;
        Description?: string;
        CountryRegionId?: string;
        StateId?: string;
        CountyId?: string;
        CityName?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface HardwareProfile {
        LineDisplayDelayForLinkedItems?: number;
        LineDisplayBalanceText?: string;
        LineDisplayBinaryConversion?: boolean;
        LineDisplayCharacterSet?: number;
        LineDisplayClosedLine1?: string;
        LineDisplayClosedLine2?: string;
        LineDisplayDeviceDescription?: string;
        LineDisplayDeviceTypeValue?: number;
        LineDisplayDeviceName?: string;
        LineDisplayDisplayLinkedItem?: boolean;
        LineDisplayDisplayTerminalClosed?: boolean;
        LineDisplayTotalText?: string;
        DualDisplayActive?: boolean;
        DualDisplayWebBrowserUrl?: string;
        DualDisplayImageRotatorInterval?: number;
        DualDisplayImageRotatorPath?: string;
        DualDisplayReceiptWidthPercentage?: number;
        DualDisplayDisplayType?: string;
        EftTypeId?: number;
        EftCompanyId?: string;
        EftConfiguration?: number;
        EftPaymentConnectorName?: string;
        EftData?: string;
        EftDescription?: string;
        EftMerchantId?: string;
        EftPassword?: string;
        EftServerName?: string;
        EftServerPort?: string;
        EftUserId?: string;
        EftTestMode?: boolean;
        MsrEndTrack1?: string;
        MsrEndTrack2?: string;
        FiscalPrinterManagementReportPAFIdentification?: string;
        FiscalPrinterManagementReportConfigParameter?: string;
        FiscalPrinterManagementReportTenderType?: string;
        FiscalPrinterManagementReportGiftCard?: string;
        FiscalRegisterDeviceTypeValue?: number;
        FiscalRegisterConfiguration?: string;
        FiscalRegisterDeviceDescription?: string;
        FiscalRegisterDeviceName?: string;
        KeyboardMappingId?: string;
        KeyLockDeviceTypeValue?: number;
        KeyLockDeviceDescription?: string;
        KeyLockDeviceName?: string;
        MsrDeviceTypeValue?: number;
        MsrDeviceDescription?: string;
        MsrDeviceName?: string;
        MsrMake?: string;
        MsrModel?: string;
        MsrSeparator?: string;
        MsrStartTrack?: string;
        PinPadDeviceTypeValue?: number;
        PinPadDeviceName?: string;
        PinPadMake?: string;
        PinPadModel?: string;
        PinPadDeviceDescription?: string;
        ProfileDescription?: string;
        ProfileId?: string;
        RFIDDeviceTypeValue?: number;
        RFIDDeviceName?: string;
        RFIDDeviceDescription?: string;
        ScaleDeviceTypeValue?: number;
        ScaleDeviceName?: string;
        ScaleDeviceDescription?: string;
        ScaleManualInputAllowed?: boolean;
        ScaleTimeoutInSeconds?: number;
        SignatureCaptureDeviceTypeValue?: number;
        SignatureCaptureDeviceName?: string;
        SignatureCaptureMake?: string;
        SignatureCaptureModel?: string;
        SignatureCaptureDeviceDescription?: string;
        SignatureCaptureFormName?: string;
        Printers?: Entities.HardwareProfilePrinter[];
        Scanners?: Entities.HardwareProfileScanner[];
        FiscalIntegrationTechnicalProfiles?: Entities.FiscalIntegrationTechnicalProfile[];
        CashDrawers?: Entities.HardwareProfileCashDrawer[];
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface SupportedLanguage {
        LanguageId?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface PaymentCard {
        UseShippingAddress?: boolean;
        CardNumber?: string;
        CCID?: string;
        Track1?: string;
        Track2?: string;
        Track3?: string;
        VoiceAuthorizationCode?: string;
        EncryptedPin?: string;
        AdditionalSecurityData?: string;
        IsSwipe?: boolean;
        Phone?: string;
        Country?: string;
        House?: string;
        Address1?: string;
        Address2?: string;
        City?: string;
        State?: string;
        Zip?: string;
        NameOnCard?: string;
        CardTypeId?: string;
        ExpirationMonth?: number;
        ExpirationYear?: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface CardPaymentAcceptSettings {
        HostPageOrigin?: string;
        AdaptorPath?: string;
        CardTokenizationEnabled?: boolean;
        CardPaymentEnabled?: boolean;
        PaymentAmount?: number;
    }
    interface CardPaymentAcceptPoint {
        AcceptPageUrl?: string;
        AcceptPageSubmitUrl?: string;
        MessageOrigin?: string;
        AcceptPageContent?: string;
    }
    interface CardPaymentAcceptResult {
        TenderLine?: Entities.TenderLine;
        TokenizedPaymentCard?: Entities.TokenizedPaymentCard;
        PaymentSdkErrors?: Entities.PaymentError[];
    }
    interface ReasonCodeLine {
        LineId?: string;
        Amount?: number;
        Information?: string;
        InformationAmount?: number;
        InputTypeValue?: number;
        ItemTender?: string;
        LineNumber?: number;
        LineTypeValue?: number;
        ParentLineId?: string;
        ReasonCodeId?: string;
        StatementCode?: string;
        SubReasonCodeId?: string;
        SourceCode?: string;
        SourceCode2?: string;
        SourceCode3?: string;
        TransactionId?: string;
        CreatedDateTime?: Date;
        FiscalTransactionParentGuid?: string;
        IsChanged?: boolean;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface ReasonSubCode {
        TriggerCode?: string;
        AmountPercent: number;
        ReasonCodeId?: string;
        SubCodeId?: string;
        Description?: string;
        TriggerFunctionTypeValue?: number;
        ProductId?: number;
        PriceTypeValue?: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface Receipt {
        TransactionId?: string;
        Header?: string;
        Body?: string;
        Footer?: string;
        Width?: number;
        ReceiptId?: string;
        LayoutId?: string;
        ReceiptTitle?: string;
        ReceiptTypeValue?: number;
        ReceiptTypeStrValue?: string;
        Printers?: Entities.Printer[];
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface ReceiptMask {
        FunctionalityProfileId?: string;
        IsIndependent: boolean;
        ReceiptTransactionTypeValue: number;
        RecordId: number;
        Mask?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface SalesLine {
        StaffId?: string;
        LineId?: string;
        Description?: string;
        OriginLineId?: string;
        TaxOverrideCode?: string;
        IsPriceKeyedIn?: boolean;
        IsTaxOverideCodeTaxExempt?: boolean;
        ProductId?: number;
        Barcode?: string;
        BarcodeEmbeddedPrice?: number;
        PriceInBarcode?: boolean;
        EntryMethodTypeValue?: number;
        MasterProductId?: number;
        ListingId?: number;
        IsPriceOverridden?: boolean;
        OriginalPrice?: number;
        TotalAmount?: number;
        NetAmountWithoutTax?: number;
        DiscountAmount?: number;
        DiscountAmountWithoutTax?: number;
        NetPrice?: number;
        TotalDiscount?: number;
        TotalPercentageDiscount?: number;
        LineDiscount?: number;
        PeriodicDiscount?: number;
        LineManualDiscountPercentage?: number;
        LineManualDiscountAmount?: number;
        ShippingAddress?: Entities.Address;
        DeliveryMode?: string;
        Comment?: string;
        RequestedDeliveryDate?: Date;
        InventoryLocationId?: string;
        WarehouseLocation?: string;
        InventoryStatusId?: string;
        LicensePlate?: string;
        InventoryDimensionId?: string;
        ItemType?: number;
        ReservationId?: string;
        LineNumber?: number;
        ReturnQuantity?: number;
        QuantityRemained?: number;
        QuantityShipped?: number;
        LineVersion?: number;
        StatusValue?: number;
        SalesStatusValue?: number;
        ProductSourceValue?: number;
        IsGiftCardLine?: boolean;
        GiftCardId?: string;
        GiftCardCurrencyCode?: string;
        GiftCardOperationValue?: number;
        IsInvoiceLine?: boolean;
        InvoiceId?: string;
        InvoiceAmount?: number;
        IsInvoiceSettled?: boolean;
        InvoiceTypeValue?: number;
        InvoicedSalesId?: string;
        IsVoided?: boolean;
        IsPriceLocked?: boolean;
        ChargeLines?: Entities.ChargeLine[];
        BasePrice?: number;
        AgreementPrice?: number;
        AdjustedPrice?: number;
        ReturnTransactionId?: string;
        ReturnLineNumber?: number;
        ReturnInventTransId?: string;
        ReturnStore?: string;
        ReturnTerminalId?: string;
        ReturnChannelId?: number;
        FulfillmentStoreId?: string;
        SalesDate?: Date;
        QuantityInvoiced?: number;
        QuantityOrdered?: number;
        QuantityCanceled?: number;
        SavedQuantity?: number;
        IsSavedDiscount?: boolean;
        RecordId?: number;
        SerialNumber?: string;
        BatchId?: string;
        DeliveryModeChargeAmount?: number;
        UnitOfMeasureSymbol?: string;
        CatalogId?: number;
        ElectronicDeliveryEmailAddress?: string;
        ElectronicDeliveryEmailContent?: string;
        LoyaltyDiscountAmount?: number;
        LoyaltyPercentageDiscount?: number;
        GiftCardBalance?: number;
        IsCustomerAccountDeposit?: boolean;
        Blocked?: boolean;
        Found?: boolean;
        DateToActivateItem?: Date;
        LinePercentageDiscount?: number;
        PeriodicPercentageDiscount?: number;
        QuantityDiscounted?: number;
        UnitQuantity?: number;
        UnitOfMeasureConversion?: Entities.UnitOfMeasureConversion;
        DiscountLines?: Entities.DiscountLine[];
        PriceLines?: Entities.PriceLine[];
        PeriodicDiscountPossibilities?: Entities.DiscountLine[];
        ReasonCodeLines?: Entities.ReasonCodeLine[];
        ReturnLabelProperties?: Entities.ReturnLabelContent;
        LineMultilineDiscOnItem?: string;
        RelatedDiscountedLineIds?: string[];
        LinkedParentLineId?: string;
        LineMultilineDiscOnItemValue?: number;
        WasChanged?: boolean;
        OriginalSalesOrderUnitOfMeasure?: string;
        InventOrderUnitOfMeasure?: string;
        TrackingId?: string;
        IsLoyaltyDiscountApplied?: boolean;
        CommissionSalesGroup?: string;
        AttributeValues?: Entities.AttributeValueBase[];
        ThirdPartyGiftCardInfo?: Entities.ThirdPartyGiftCardInfo;
        QuantityReturnable?: number;
        LoyaltyRewardPointLines?: Entities.LoyaltyRewardPointLine[];
        ReturnLoyaltyRewardPointLines?: Entities.LoyaltyRewardPointLine[];
        ItemId?: string;
        Quantity?: number;
        Price?: number;
        ItemTaxGroupId?: string;
        SalesTaxGroupId?: string;
        OriginalSalesTaxGroupId?: string;
        OriginalItemTaxGroupId?: string;
        TaxAmount?: number;
        SalesOrderUnitOfMeasure?: string;
        NetAmount?: number;
        NetAmountPerUnit?: number;
        GrossAmount?: number;
        TaxLines?: Entities.TaxLine[];
        TaxMeasures?: Entities.TaxMeasure[];
        TaxAmountExemptInclusive?: number;
        TaxAmountInclusive?: number;
        TaxAmountExclusive?: number;
        NetAmountWithAllInclusiveTax?: number;
        BeginDateTime?: Date;
        EndDateTime?: Date;
        TaxRatePercent?: number;
        IsReturnByReceipt?: boolean;
        ReturnLineTaxAmount?: number;
        ReturnTaxLines?: Entities.TaxLine[];
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface SearchArea {
        Longitude?: number;
        Latitude?: number;
        Radius?: number;
        DistanceUnitValue?: number;
    }
    interface ShiftAccountLine {
        AccountTypeValue?: number;
        AccountNumber?: string;
        Amount?: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface ShiftTenderLine {
        TenderTypeId?: string;
        TenderTypeName?: string;
        CardTypeId?: string;
        TenderCurrency?: string;
        CountingRequired?: boolean;
        StartingAmountOfStoreCurrency?: number;
        StartingAmountOfTenderCurrency?: number;
        FloatingEntryAmountOfStoreCurrency?: number;
        FloatingEntryAmountOfTenderCurrency?: number;
        SafeDropAmountOfStoreCurrency?: number;
        SafeDropAmountOfTenderCurrency?: number;
        BankDropAmountOfStoreCurrency?: number;
        BankDropAmountOfTenderCurrency?: number;
        RemoveTenderAmountOfStoreCurrency?: number;
        RemoveTenderAmountOfTenderCurrency?: number;
        DeclareTenderAmountOfStoreCurrency?: number;
        DeclareTenderAmountOfTenderCurrency?: number;
        TenderedAmountOfStoreCurrency?: number;
        TenderedAmountOfTenderCurrency?: number;
        ChangeAmountOfStoreCurrency?: number;
        ChangeAmountOfTenderCurrency?: number;
        Count?: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface StockCountJournalTransaction {
        JournalId?: string;
        RecordId?: number;
        OperationType?: number;
        ItemId?: string;
        DataAreaId?: string;
        ProductRecordId?: number;
        ItemName?: string;
        InventDimId?: string;
        Counted?: number;
        Quantity?: number;
        Unit?: string;
        UserId?: string;
        TerminalId?: string;
        CountedDate?: Date;
        Status?: number;
        InventBatchId?: string;
        WarehouseLocationId?: string;
        InventoryStatus?: string;
        LicensePlate?: string;
        WarehousePalletId?: string;
        InventSiteId?: string;
        InventLocationId?: string;
        ConfigId?: string;
        InventSizeId?: string;
        InventColorId?: string;
        InventStyleId?: string;
        InventSerialId?: string;
        TrackingGuid?: string;
        UpdatedInAx?: boolean;
        Message?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface TaxLine {
        TaxGroup?: string;
        Percentage?: number;
        IsExempt?: boolean;
        TaxBasis?: number;
        IsIncludedInPrice?: boolean;
        SaleLineNumber?: number;
        StoreId?: string;
        TerminalId?: string;
        TransactionId?: string;
        TaxCode?: string;
        Amount?: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface TenderLine {
        CardToken?: string;
        Authorization?: string;
        TransactionStatusValue?: number;
        IncomeExpenseAccountTypeValue?: number;
        MaskedCardNumber?: string;
        TenderDate?: Date;
        IsPreProcessed?: boolean;
        IsDeposit?: boolean;
        TenderLineId?: string;
        Amount?: number;
        CashBackAmount?: number;
        AmountInTenderedCurrency?: number;
        AmountInCompanyCurrency?: number;
        Currency?: string;
        ExchangeRate?: number;
        CompanyCurrencyExchangeRate?: number;
        TenderTypeId?: string;
        SignatureData?: string;
        ReasonCodeLines?: Entities.ReasonCodeLine[];
        LineNumber?: number;
        GiftCardId?: string;
        CreditMemoId?: string;
        CustomerId?: string;
        LoyaltyCardId?: string;
        CardTypeId?: string;
        IsChangeLine?: boolean;
        IsHistorical?: boolean;
        IsVoidable?: boolean;
        StatusValue?: number;
        VoidStatusValue?: number;
        AuthorizedAmount?: number;
        PaymentRefRecId?: number;
        CardPaymentAccountId?: string;
        ProcessingTypeValue?: number;
        CardProcessorStatusValue?: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface TextValueTranslation {
        Language?: string;
        Text?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface UnitOfMeasure {
        DecimalPrecision?: number;
        Symbol?: string;
        Description?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface CommerceListLine {
        CommerceListId?: number;
        LineId?: number;
        CustomerId?: string;
        CustomerName?: string;
        ProductId?: number;
        Quantity?: number;
        UnitOfMeasure?: string;
        IsFavorite?: boolean;
        IsRecurring?: boolean;
        IsPrivate?: boolean;
        CreatedDateTime?: Date;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface CommerceListContributor {
        RecordId?: number;
        CustomerId?: string;
        CustomerName?: string;
        InvitationId?: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface CommerceListInvitation {
        RecordId?: number;
        Invitee?: string;
        IsSent?: boolean;
        LastRequestDateTime?: Date;
        LastSentDateTime?: Date;
        StatusValue?: number;
        Token?: string;
        InvitationTypeValue?: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface SearchFilter {
        Key?: string;
        FilterTypeValue: number;
        SearchValues?: Entities.SearchFilterValue[];
    }
    interface SearchFilterValue {
        Value?: Entities.CommercePropertyValue;
    }
    interface TransactionSearchCriteria {
        TransactionIds?: string[];
        SalesId?: string;
        ReceiptId?: string;
        ChannelReferenceId?: string;
        CustomerAccountNumber?: string;
        CustomerFirstName?: string;
        CustomerLastName?: string;
        StoreId?: string;
        TerminalId?: string;
        ItemId?: string;
        Barcode?: string;
        SerialNumber?: string;
        StaffId?: string;
        StartDateTime?: Date;
        EndDateTime?: Date;
        ReceiptEmailAddress?: string;
        SearchIdentifiers?: string;
        SearchLocationTypeValue?: number;
        CustomFilters?: Entities.SearchFilter[];
    }
    interface SalesOrderSearchCriteria {
        TransactionIds?: string[];
        SalesId?: string;
        ReceiptId?: string;
        ChannelReferenceId?: string;
        CustomerAccountNumber?: string;
        CustomerFirstName?: string;
        CustomerLastName?: string;
        StoreId?: string;
        TerminalId?: string;
        ItemId?: string;
        Barcode?: string;
        SerialNumber?: string;
        StaffId?: string;
        SearchTypeValue?: number;
        StartDateTime?: Date;
        EndDateTime?: Date;
        IncludeDetails?: boolean;
        ReceiptEmailAddress?: string;
        SearchIdentifiers?: string;
        SalesTransactionTypeValues?: number[];
        SearchLocationTypeValue?: number;
        TransactionStatusTypeValues?: number[];
    }
    interface SearchStoreCriteria {
        ChannelId?: number;
        StoreNumber?: string;
        InventoryLocationId?: string;
    }
    interface CustomerSearchCriteria {
        Keyword?: string;
        SearchOnlyCurrentCompany?: boolean;
        SearchLocationValue?: number;
        DataLevelValue?: number;
    }
    interface ProductPrice {
        ProductId?: number;
        ListingId?: number;
        BasePrice?: number;
        TradeAgreementPrice?: number;
        AdjustedPrice?: number;
        CustomerContextualPrice?: number;
        DiscountAmount?: number;
        CurrencyCode?: string;
        ItemId?: string;
        InventoryDimensionId?: string;
        UnitOfMeasure?: string;
        ValidFrom?: Date;
        ProductLookupId?: number;
        ChannelId?: number;
        CatalogId?: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface OrgUnitAvailability {
        OrgUnitLocation?: Entities.OrgUnitLocation;
        ItemAvailabilities?: Entities.ItemAvailability[];
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface ProductVariantPropertySet {
        VariantId?: number;
        ProductVariantPropertiesAsList?: Entities.ProductPropertyTranslation[];
    }
    interface PurchaseOrderLine {
        RecordId?: number;
        OrderId?: string;
        ProductRecordId?: number;
        ItemId?: string;
        ItemName?: string;
        InventDimId?: string;
        QuantityOrdered?: number;
        PurchaseQuantity?: number;
        PurchaseUnit?: string;
        PurchaseReceived?: number;
        PurchaseReceivedNow?: number;
        InventBatchId?: string;
        WMSLocationId?: string;
        WMSPalletId?: string;
        InventoryStatus?: string;
        LicensePlate?: string;
        InventSiteId?: string;
        InventLocationId?: string;
        ConfigId?: string;
        InventSerialId?: string;
        InventSizeId?: string;
        InventColorId?: string;
        InventStyleId?: string;
        IsCommitted?: boolean;
        Message?: string;
        UniqueIdentifier?: string;
        DeliveryMethod?: string;
        DataAreaId?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface TransferOrderLine {
        RecordId?: number;
        OrderId?: string;
        ProductRecordId?: number;
        ItemId?: string;
        ItemName?: string;
        InventDimId?: string;
        QuantityTransferred?: number;
        QuantityShipped?: number;
        QuantityReceived?: number;
        QuantityShipNow?: number;
        QuantityReceiveNow?: number;
        QuantityRemainShip?: number;
        QuantityRemainReceive?: number;
        PurchaseUnit?: string;
        InventBatchId?: string;
        WMSLocationId?: string;
        WMSPalletId?: string;
        InventoryStatus?: string;
        LicensePlate?: string;
        InventSiteId?: string;
        InventLocationId?: string;
        ConfigId?: string;
        InventSerialId?: string;
        InventSizeId?: string;
        InventColorId?: string;
        InventStyleId?: string;
        IsCommitted?: boolean;
        Message?: string;
        Guid?: string;
        DeliveryMethod?: string;
        DataAreaId?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface TransferOrderJournal {
        OrderId?: string;
        VoucherId?: string;
        UpdatedByWorker?: string;
        InventLocationIdFrom?: string;
        InventLocationIdTo?: string;
        QuantityShipped?: number;
        PostingDate?: Date;
        DeliveryMode?: string;
        Comments?: string;
        JournalLines?: Entities.TransferOrderJournalLine[];
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface PickingListLine {
        RecordId?: number;
        OrderId?: string;
        ProductRecordId?: number;
        ItemId?: string;
        ItemName?: string;
        InventDimId?: string;
        QuantityOrdered?: number;
        PurchaseReceivedNow?: number;
        InventBatchId?: string;
        WMSLocationId?: string;
        WMSPalletId?: string;
        InventoryStatus?: string;
        LicensePlate?: string;
        InventSiteId?: string;
        InventLocationId?: string;
        ConfigId?: string;
        InventSerialId?: string;
        InventSizeId?: string;
        InventColorId?: string;
        InventStyleId?: string;
        IsCommitted?: boolean;
        Message?: string;
        Guid?: string;
        DeliveryMethod?: string;
        DataAreaId?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface Affiliation {
        RecordId?: number;
        AffiliationTypeValue?: number;
        Description?: string;
        Name?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface ProductDimension {
        DimensionTypeValue: number;
        DimensionValue?: Entities.ProductDimensionValue;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface ProductDimensionValue {
        RecordId: number;
        Value?: string;
        DimensionId?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface ProductDimensionCombination {
        ProductDimensions?: Entities.ProductDimension[];
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface ProductRefiner {
        RecordId?: number;
        KeyName?: string;
        SourceValue?: number;
        DataTypeValue?: number;
        RefinerTypeValue?: number;
        DisplayTemplateValue?: number;
        Values?: Entities.ProductRefinerValue[];
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface ProductRefinerValue {
        RefinerRecordId?: number;
        RefinerSourceValue?: number;
        DataTypeValue?: number;
        LeftValueBoundString?: string;
        RightValueBoundString?: string;
        UnitText?: string;
        RowNumber?: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface ProductRelationType {
        Name?: string;
        RecordId: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface ComponentInSlotRelation {
        ComponentId: number;
        SlotId: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface ProductRules {
        HasLinkedProducts: boolean;
        IsSerialized: boolean;
        IsActiveInSalesProcess: boolean;
        IsBlocked: boolean;
        DateOfBlocking: Date;
        DateToActivate: Date;
        DateToBlock: Date;
        DefaultUnitOfMeasure?: string;
        PriceKeyingRequirementValue: number;
        QuantityKeyingRequirementValue: number;
        MustKeyInComment: boolean;
        CanQuantityBecomeNegative: boolean;
        MustScaleItem: boolean;
        CanPriceBeZero: boolean;
        ProductId?: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface LocalizedString {
        RecordId?: number;
        LanguageId?: string;
        TextId?: number;
        Text?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface LoyaltyCard {
        CardNumber?: string;
        CardTenderTypeValue?: number;
        CustomerAccount?: string;
        LoyaltyGroups?: Entities.LoyaltyGroup[];
        RewardPoints?: Entities.LoyaltyRewardPoint[];
        LoyaltyEnrollmentDate?: Date;
        OmOperatingUnitId?: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface ProductComponent {
        ProductId: number;
        SlotId: number;
        Product?: Entities.SimpleProduct;
        AdditionalChargeForComponent?: number;
        Behavior?: Entities.ProductBehavior;
        Description?: string;
        Dimensions?: Entities.ProductDimension[];
        ItemId?: string;
        Name?: string;
        ProductTypeValue?: number;
        Quantity?: number;
        UnitOfMeasure?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface SimpleProduct {
        RecordId: number;
        ItemId?: string;
        Name?: string;
        Description?: string;
        ProductTypeValue: number;
        DefaultUnitOfMeasure?: string;
        BasePrice: number;
        Price: number;
        AdjustedPrice: number;
        MasterProductId?: number;
        Components?: Entities.ProductComponent[];
        Dimensions?: Entities.ProductDimension[];
        Behavior?: Entities.ProductBehavior;
        LinkedProducts?: Entities.SimpleLinkedProduct[];
        PrimaryImageUrl?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface ProductBehavior {
        HasSerialNumber: boolean;
        IsDiscountAllowed: boolean;
        IsManualDiscountAllowed: boolean;
        IsKitDisassemblyAllowed: boolean;
        IsNegativeQuantityAllowed: boolean;
        IsReturnAllowed: boolean;
        IsSaleAtPhysicalStoresAllowed: boolean;
        IsZeroSalePriceAllowed: boolean;
        KeyInPriceValue: number;
        KeyInQuantityValue: number;
        MustKeyInComment: boolean;
        MustPrintIndividualShelfLabelsForVariants: boolean;
        MustPromptForSerialNumberOnlyAtSale: boolean;
        MustWeighProductAtSale: boolean;
        ValidFromDateForSaleAtPhysicalStores: Date;
        ValidToDateForSaleAtPhysicalStores: Date;
        IsBlankSerialNumberAllowed?: boolean;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface SimpleLinkedProduct {
        RecordId: number;
        ItemId?: string;
        Name?: string;
        Description?: string;
        ProductTypeValue: number;
        DefaultUnitOfMeasure?: string;
        BasePrice: number;
        Price: number;
        AdjustedPrice: number;
        Quantity: number;
        Behavior?: Entities.ProductBehavior;
        Dimensions?: Entities.ProductDimension[];
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface ProductSearchResult {
        ItemId?: string;
        Name?: string;
        Price: number;
        PrimaryImageUrl?: string;
        RecordId: number;
        TrackingId?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface SearchSuggestion {
        Value?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface LoyaltyPointRedemptionEstimate {
        MaxCurrencyValueOfLoyaltyPoints?: number;
        RewardPointToRedeemList?: Entities.LoyaltyRewardPointLine[];
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface LoyaltyGroup {
        Description?: string;
        Name?: string;
        RecordId: number;
        LoyaltyTiers?: Entities.LoyaltyTier[];
        LoyaltyCardTiers?: Entities.LoyaltyCardTier[];
        HighestActiveLoyaltyCardTier?: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface LoyaltyTier {
        Description?: string;
        RecordId: number;
        TierId?: string;
        TierLevel: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface LoyaltyCardTier {
        RecordId: number;
        TierId?: string;
        LoyaltyTierRecordId: number;
        ValidFrom: Date;
        ValidTo: Date;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface LoyaltyRewardPoint {
        IsRedeemable: boolean;
        RewardPointCurrency?: string;
        RewardPointTypeValue: number;
        Description?: string;
        RewardPointId?: string;
        IssuedPoints?: number;
        UsedPoints?: number;
        ExpiredPoints?: number;
        ActivePoints?: number;
        PointsExpiringSoon?: number;
        UnvestedPoints?: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface LoyaltyCardTransaction {
        ChannelName?: string;
        EntryDateTime: Date;
        EntryTypeValue: number;
        ExpirationDate: Date;
        RewardPointAmountQuantity: number;
        TransactionId?: string;
    }
    interface GiftCard {
        Id?: string;
        Balance?: number;
        BalanceCurrencyCode?: string;
        BalanceInCardCurrency?: number;
        CardCurrencyCode?: string;
        GiftCardIssueAmount?: number;
        GiftCardActiveFrom?: Date;
        GiftCardExpireDate?: Date;
        GiftCardHistoryDetails?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface OperationPermission {
        OperationName?: string;
        OperationId?: number;
        CheckUserAccess?: boolean;
        AllowAnonymousAccess?: boolean;
        AllowCustomerAccess?: boolean;
        AllowApplicationAccess?: boolean;
        Permissions?: string[];
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface StateProvinceInfo {
        CountryRegionId?: string;
        StateId?: string;
        StateName?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface TransactionLog extends Transaction {
    }
    interface KitTransaction extends TransactionLog {
        KitTransactionLines?: Entities.KitTransactionLine[];
    }
    interface SalesTaxGroup {
        RecordId: number;
        TaxGroup?: string;
        TaxGroupName?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface ProductProperty {
        ValueString?: string;
        UnitText?: string;
        PropertyTypeValue?: number;
        KeyName?: string;
        FriendlyName?: string;
        RecordId?: number;
        IsDimensionProperty?: boolean;
        AttributeValueId?: number;
        GroupId?: number;
        GroupTypeValue?: number;
        GroupName?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
        ProductId?: number;
        CatalogId?: number;
    }
    interface ProductCompositionInformation {
        VariantInformation?: Entities.ProductVariantInformation;
        KitDefinition?: Entities.KitDefinition;
    }
    interface ProductVariantInformation {
        ActiveVariantProductId: number;
        Variants?: Entities.ProductVariant[];
        Dimensions?: Entities.ProductDimensionSet[];
        ItemId?: string;
        MasterProductId?: number;
    }
    interface ProductChangeTrackingInformation {
        ModifiedDateTime: Date;
        ChangeActionValue?: number;
        RequestedActionValue?: number;
    }
    interface ProductDimensionSet {
        DimensionKey?: string;
        DimensionValues?: Entities.ProductDimensionValueSet[];
    }
    interface ProductDimensionValueSet {
        DimensionValue?: string;
        VariantSet?: number[];
    }
    interface RichMediaLocations {
        Items?: Entities.RichMediaLocationsRichMediaLocation[];
    }
    interface RichMediaLocationsRichMediaLocation {
        Url?: string;
        AltText?: string;
        IsSelfHosted?: boolean;
        IsDefault?: boolean;
    }
    interface KitDefinition {
        DisassembleAtRegister: boolean;
        KitLineDefinitions?: Entities.KitLineDefinition[];
        KitLineProductToVariantMap?: Entities.ComponentKitVariantSet[];
        KitVariantToComponentMap?: Entities.KitVariantContent[];
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface ComponentKitVariantSet {
        KitLineProductId: number;
        KitVariantIdList?: number[];
    }
    interface KitLineDefinition {
        ComponentProductId: number;
        KitLineIdentifier: number;
        SubstituteProductIds?: number[];
        ComponentProperties?: Entities.KitLineProductProperty[];
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface KitLineProductProperty {
        KitLineIdentifier: number;
        ProductId: number;
        Unit?: string;
        Quantity: number;
        Charge: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface KitComponentKey {
        KitLineIdentifier: number;
        DistinctProductId: number;
    }
    interface KitVariantContent {
        KitVariantId: number;
        KitComponentKeyList?: Entities.KitComponentKey[];
    }
    interface ProductLookupClause {
        ItemId?: string;
        InventDimensionId?: string;
        Barcode?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface OrgUnitLocation {
        ChannelId?: number;
        Latitude?: number;
        Longitude?: number;
        OrgUnitName?: string;
        OrgUnitNumber?: string;
        Address?: string;
        Street?: string;
        StreetNumber?: string;
        City?: string;
        DistrictName?: string;
        BuildingCompliment?: string;
        Postbox?: string;
        Zip?: string;
        County?: string;
        CountyName?: string;
        State?: string;
        StateName?: string;
        Country?: string;
        Distance?: number;
        InventoryLocationId?: string;
        InventorySiteId?: string;
        PostalAddressId?: number;
        OpenFrom?: number;
        OpenTo?: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface SalesLineDeliveryOption {
        SalesLineId?: string;
        DeliveryOptions?: Entities.DeliveryOption[];
    }
    interface DeliveryOption {
        ChargeGroup?: string;
        Code?: string;
        Description?: string;
        RecordId: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface ChannelProfileProperty {
        Key: number;
        Value?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface ChannelConfiguration {
        RecordId: number;
        ChannelNaturalId?: string;
        MinimumDepositPercentage: number;
        QuoteExpirationDays: number;
        PickupDeliveryModeCode?: string;
        CarryoutDeliveryModeCode?: string;
        CancellationChargePercentage: number;
        InventLocation?: string;
        InventLocationDataAreaId?: string;
        BingMapsApiKey?: string;
        BingMapsEnabled: boolean;
        Currency?: string;
        CatalogDefaultImageTemplate?: string;
        CompanyCurrency?: string;
        PriceIncludesSalesTax: boolean;
        CountryRegionId?: string;
        ChannelCountryRegionISOCode?: string;
        DefaultLanguageId?: string;
        TimeZoneInfoId?: string;
        EmailDeliveryModeCode?: string;
        GiftCardItemId?: string;
        EnableProductRecommendations: boolean;
        RefundableShippingAmountWithoutApproval: number;
        RefundShippingCharges: boolean;
        ReceiptSettingsValue: number;
        CustomerAttributeGroupId: number;
        NotificationRefreshInterval: number;
        AllowExchangeOnReturnOrders?: boolean;
        FiscalRegistrationProcessId?: string;
        ProfileProperties?: Entities.ChannelProfileProperty[];
        Properties?: Entities.ChannelProperty[];
        Languages?: Entities.ChannelLanguage[];
        UseAdvancedAutoCharges?: boolean;
        EnableReturnsForMultipleOrderInvoices?: boolean;
        VoidSuspendedTransactionsOnCloseShift?: number;
        EnableOmniChannelPayments?: boolean;
        UseAdvancedCashManagement?: boolean;
        SalesOrderHeaderAttributeGroups?: number[];
        SalesOrderLinesAttributeGroups?: number[];
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface ChannelProperty {
        Name?: string;
        Value?: string;
        Channel?: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface ChannelLanguage {
        LanguageId?: string;
        IsDefault: boolean;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface NonSalesTransaction extends Transaction {
        ReasonCodeLines?: Entities.ReasonCodeLine[];
        Amount?: number;
        ForeignCurrency?: string;
        OpenDrawer?: boolean;
        DenominationDetails?: Entities.DenominationDetail[];
    }
    interface DropAndDeclareTransaction extends Transaction {
        TenderDetails?: Entities.TenderDetail[];
        ReasonCodeLines?: Entities.ReasonCodeLine[];
        OpenDrawer?: boolean;
    }
    interface ProductSearchCriteria {
        Ids?: number[];
        CategoryIds?: number[];
        IncludeProductsFromDescendantCategories?: boolean;
        SearchCondition?: string;
        SkipVariantExpansion?: boolean;
        Barcodes?: string[];
        ItemIds?: Entities.ProductLookupClause[];
        Refinement?: Entities.ProductRefinerValue[];
        DownloadProductData?: boolean;
        Context?: Entities.ProjectionDomain;
        Language?: string;
        IsOnline?: boolean;
        DataLevelValue?: number;
    }
    interface ChangedProductsSearchCriteria {
        SynchronizationToken?: string;
        Context?: Entities.ProjectionDomain;
        AsListings?: boolean;
        Session?: Entities.ReadChangedProductsSession;
        DataLevelValue?: number;
    }
    interface EmployeeActivitySearchCriteria {
        FromDateTimeOffset?: Date;
        ToDateTimeOffset?: Date;
        StoreNumber?: string;
        EmployeeActivityTypeValues?: number[];
        DataLevelValue?: number;
    }
    interface CartLineDeliveryPreference {
        LineId?: string;
        DeliveryPreferenceTypeValues?: number[];
    }
    interface CartLinePromotion {
        LineId?: string;
        Promotions?: string[];
    }
    interface ProductVariant {
        ItemId?: string;
        MasterProductId: number;
        InventoryDimensionId?: string;
        AdjustedPrice: number;
        BasePrice: number;
        Price: number;
        Color?: string;
        Style?: string;
        Size?: string;
        Configuration?: string;
        ColorId?: string;
        StyleId?: string;
        SizeId?: string;
        ConfigId?: string;
        VariantId?: string;
        Images?: Entities.RichMediaLocations[];
        DistinctProductVariantId?: number;
        ProductNumber?: string;
        PropertiesAsList?: Entities.ProductPropertyTranslation[];
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface HardwareProfilePrinter {
        ProfileId?: string;
        DeviceTypeValue?: number;
        DeviceName?: string;
        DeviceMake?: string;
        DeviceModel?: string;
        DeviceDescription?: string;
        CharacterSet?: number;
        ReceiptProfileId?: string;
        BinaryConversion?: boolean;
        DocInsertRemovalTimeout?: number;
        Logo?: string;
        LogoAlignment?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface HardwareProfileScanner {
        ProfileId?: string;
        DeviceTypeValue?: number;
        DeviceName?: string;
        DeviceDescription?: string;
        DecodeData?: boolean;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface HardwareProfileCashDrawer {
        ProfileId?: string;
        DeviceTypeValue?: number;
        DeviceName?: string;
        DeviceDescription?: string;
        DeviceMake?: string;
        DeviceModel?: string;
        IsSharedShiftDrawer?: boolean;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface TillLayout {
        CashChangerLayoutXml?: string;
        CustomerLayoutId?: string;
        CustomerLayoutXml?: string;
        Height?: number;
        LayoutId?: string;
        LayoutTypeValue?: number;
        LayoutXml?: string;
        LayoutXmlPortrait?: string;
        Name?: string;
        ReceiptId?: string;
        ReceiptItemsLayoutXml?: string;
        ReceiptPaymentLayoutXml?: string;
        TotalId?: string;
        TotalsLayoutXml?: string;
        Width?: number;
        RecordId?: number;
        StartScreen?: number;
        ButtonGridZones?: Entities.ButtonGridZone[];
        ImageZones?: Entities.ImageZone[];
        ReportZones?: Entities.ReportZone[];
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface SalesInvoice {
        RecordId?: number;
        Id?: string;
        SalesId?: string;
        SalesType?: string;
        InvoiceDate?: Date;
        CurrencyCode?: string;
        Amount?: number;
        AmountPaid?: number;
        Account?: string;
        Name?: string;
        TotalManualDiscountPercentage?: number;
        TotalManualDiscountAmount?: number;
        SalesInvoiceLine?: Entities.SalesInvoiceLine[];
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface OrderInvoice {
        Id?: string;
        CustomerAccountNumber?: string;
        CustomerName?: string;
        InvoiceDate?: Date;
        TotalAmount?: number;
        AmountPaid?: number;
        AmountBalance?: number;
        InvoiceTypeValue?: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface TaxOverride {
        Code?: string;
        SourceTaxGroup?: string;
        DestinationTaxGroup?: string;
        SourceItemTaxGroup?: string;
        DestinationItemTaxGroup?: string;
        ChannelId?: number;
        AdditionalDescription?: string;
        Status?: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface TenderType {
        Function: number;
        TenderTypeId?: string;
        Name?: string;
        OperationId?: number;
        OperationName?: string;
        ChangeTenderTypeId?: string;
        AboveMinimumChangeAmount?: number;
        AboveMinimumChangeTenderTypeId?: string;
        OpenDrawer?: boolean;
        UseSignatureCaptureDevice?: boolean;
        MinimumSignatureCaptureAmount?: number;
        IsOvertenderAllowed?: boolean;
        IsUndertenderAllowed?: boolean;
        MaximumOvertenderAmount?: number;
        MaximumUndertenderAmount?: number;
        MaximumAmountPerTransaction?: number;
        MaximumAmountPerLine?: number;
        MinimumAmountPerTransaction?: number;
        MinimumAmountPerLine?: number;
        RoundOff?: number;
        CountingRequired?: number;
        TakenToBank?: number;
        TakenToSafe?: number;
        ConnectorId?: string;
        GiftCardItem?: string;
        GiftCardCashoutOutThreshold?: number;
        ChangeLineOnReceipt?: string;
        HideCardInputDetails?: boolean;
        CashDrawerLimitEnabled?: boolean;
        CashDrawerLimit?: number;
        RestrictReturnsWithoutReceipt?: boolean;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface ReasonCode {
        InputRequired: boolean;
        LinkedReasonCodeId?: string;
        MaximumLength: number;
        MaximumValue: number;
        MinimumLength: number;
        MinimumValue: number;
        OncePerTransaction: boolean;
        PrintInputNameOnReceipt: boolean;
        PrintInputToReceipt: boolean;
        PrintPromptToReceipt: boolean;
        Prompt?: string;
        RandomFactor: number;
        RetailUseReasonCode: boolean;
        ReasonCodeId?: string;
        Description?: string;
        InputTypeValue?: number;
        ActivityValue?: number;
        IsMultiLineText?: boolean;
        ReasonSubCodes?: Entities.ReasonSubCode[];
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface ReportDataSet {
        ReportId?: string;
        Parameters?: Entities.CommerceProperty[];
        Locale?: string;
        Output?: Entities.ReportRow[];
        HasTotalRow?: boolean;
        HasDisclaimer?: boolean;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface ZipCodeInfo {
        ZipPostalCode?: string;
        StreetName?: string;
        TimeZone?: number;
        CountryRegionId?: string;
        StateId?: string;
        CountyId?: string;
        CityName?: string;
        CityAlias?: string;
        District?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface ReasonCodeRequirement {
        ReasonCodeId?: string;
        SourceId?: string;
        TableRefTypeValue?: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface QueryResultSettings {
        Paging?: Entities.PagingInfo;
        Sorting?: Entities.SortingInfo;
    }
    interface SortingInfo {
        Columns?: Entities.SortColumn[];
    }
    interface SortColumn {
        ColumnName?: string;
        IsDescending?: boolean;
    }
    interface PagingInfo {
        Top?: number;
        Skip?: number;
    }
    interface ProductPropertyTranslation {
        TranslationLanguage?: string;
        TranslatedProperties?: Entities.ProductProperty[];
    }
    interface NumberSequenceSeedData {
        DataTypeValue?: number;
        DataValue?: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface DeviceActivationResult {
        Device?: Entities.Device;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface PurchaseHistory {
        DatePurchased?: Date;
        ImageUrl?: string;
        ItemId?: string;
        ProductId?: number;
        ProductName?: string;
        ReceiptId?: string;
        SalesId?: string;
        ChannelId?: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface Node {
        ParentScopeId?: string;
        ParentSequence?: number;
        Id?: string;
        Sequence?: number;
        Description?: string;
        ScreenshotUri?: string;
    }
    interface Line {
        ChildrenIds?: number[];
        Id?: number;
        Name?: string;
        Description?: string;
        IsLinked?: boolean;
        LineMetadataId?: number;
        Artifacts?: Entities.ArtifactSummary[];
        MetadataPropertyValues?: Entities.MetadataPropertyValue[];
    }
    interface Scope extends Node {
        Name?: string;
        ScopeTypeValue: number;
        Children?: Entities.Node[];
        ActiveCount: number;
        IsForm?: boolean;
    }
    interface Framework {
        Lines?: Entities.Line[];
        Id?: number;
        Name?: string;
        Access?: string;
        Hierarchy?: Entities.Line[];
        Publisher?: string;
    }
    interface UserAction extends Node {
        SystemGenerated?: boolean;
        GlobalId?: string;
        Annotations?: Entities.Annotation[];
    }
    interface TaskUserAction extends UserAction {
        UserActionTypeValue: number;
        Name?: string;
        Comment?: string;
        TaskId?: string;
    }
    interface FormUserAction extends UserAction {
        FormId?: string;
        ControlLabel?: string;
    }
    interface CommandUserAction extends FormUserAction {
        ReturnTypeValue: number;
        CommandName?: string;
        ControlName?: string;
        ControlType?: string;
        Arguments?: Entities.CommandArgument[];
        LabelId?: string;
        ReturnValue?: string;
    }
    interface Annotation {
        Description?: string;
    }
    interface Recording {
        Scopes?: Entities.Scope[];
        FormContextEntries?: Entities.FormContextDictionaryEntry[];
        RootScope?: Entities.Scope;
        Name?: string;
        Description?: string;
    }
    interface FormContextDictionaryEntry {
        FormId?: string;
        FormContext?: Entities.FormContext;
    }
    interface ProductVariantResolutionContext {
    }
    interface ProductVariantResolutionOnKitSelectionContext extends ProductVariantResolutionContext {
        SelectedComponents?: Entities.ComponentInSlotRelation[];
        SlotId?: number;
    }
    interface WarehouseLocation {
        LocationId?: string;
        IsLicensePlateControlled: boolean;
        ProfileId?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface FiscalTransaction {
        CreatedDateTime?: Date;
        StoreId?: string;
        TerminalId?: string;
        TransactionId?: string;
        TransDateTime?: Date;
        LineNumber?: number;
        RegisterResponse?: string;
        ReceiptCopy?: boolean;
        RecordGUID?: string;
        RegisterStoreId?: string;
        RegisterTerminalId?: string;
        StaffId?: string;
        RegistrationStatusValue?: number;
        RegistrationProcessId?: string;
        ConnectorGroup?: string;
        ConnectorName?: string;
        ConnectorFunctionalityProfileId?: string;
        RegisterInfo?: string;
        TenderLineAdjustments?: Entities.FiscalTransactionTenderLineAdjustment[];
        SalesLineAdjustments?: Entities.FiscalTransactionSalesLineAdjustment[];
        ReasonCodeLines?: Entities.ReasonCodeLine[];
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface FulfillmentLine {
        SalesId?: string;
        SalesPersonStoreId?: string;
        SalesPersonId?: string;
        SalesPersonFirstName?: string;
        SalesPersonLastName?: string;
        SalesLineNumber?: number;
        ReceiptId?: string;
        ChannelReferenceId?: string;
        CustomerId?: string;
        CustomerName?: string;
        EmailAddress?: string;
        DeliveryModeCode?: string;
        DocumentStatusValue?: number;
        FulfillmentDeliveryType?: Entities.FulfillmentLineDeliveryType;
        DeliveryTypeValue?: number;
        QuantityOrdered?: number;
        QuantityPicked?: number;
        QuantityPacked?: number;
        QuantityInvoiced?: number;
        StoreInventoryTotalQuantity?: number;
        StoreInventoryReservedQuantity?: number;
        StoreInventoryOrderedQuantity?: number;
        ItemId?: string;
        ProductId?: number;
        ProductVariant?: string;
        ItemName?: string;
        FulfillmentStatus?: Entities.FulfillmentLineStatus;
        FulfillmentStatusValue?: number;
        UnitOfMeasureSymbol?: string;
        RequestedShipDate?: Date;
        RequestedDeliveryDate?: Date;
        RequestedReceiptDate?: Date;
        CreatedDate?: Date;
        TotalAmount?: number;
        Balance?: number;
        ShippingAddress?: Entities.Address;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface FulfillmentLineSearchCriteria {
        CustomerId?: string;
        CustomerName?: string;
        EmailAddress?: string;
        SalesId?: string;
        OrderCreatedStartDate?: Date;
        OrderCreatedEndDate?: Date;
        ReceiptId?: string;
        StoreId?: string;
        ChannelReferenceId?: string;
        RequestedReceiptStartDate?: Date;
        RequestedReceiptEndDate?: Date;
        RequestedDeliveryStartDate?: Date;
        RequestedDeliveryEndDate?: Date;
        FulfillmentStatusValues?: number[];
        DeliveryModeCode?: string;
        WarehouseId?: string;
        DeliveryTypeValue?: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface Comment {
        RecordId?: number;
        AuthorStaffId?: string;
        AuthorName?: string;
        Text?: string;
        CreatedDateTime?: Date;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface AddressPurpose {
        RecordId: number;
        AddressType: number;
        Name?: string;
        Description?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface MediaLocation {
        Uri?: string;
        AltText?: string;
        IsDefault?: boolean;
        IsSelfHosted?: boolean;
        Priority?: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface EmployeeActivity {
        StaffId?: string;
        StaffName?: string;
        Activity?: string;
        ActivityDateTimeOffset?: Date;
        StoreNumber?: string;
        EmployeeActivityTypeValue?: number;
        BreakCategory?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface TokenizedPaymentCard {
        IsSwipe?: boolean;
        TenderType?: string;
        CardTokenInfo?: Entities.CardTokenInfo;
        Phone?: string;
        Country?: string;
        House?: string;
        Address1?: string;
        Address2?: string;
        City?: string;
        State?: string;
        Zip?: string;
        NameOnCard?: string;
        CardTypeId?: string;
        ExpirationMonth?: number;
        ExpirationYear?: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface LineShippingAddress {
        LineId?: string;
        ShippingAddress?: Entities.Address;
    }
    interface CartDeliveryPreferences {
        HeaderDeliveryPreferenceTypeValues?: number[];
        CartLineDeliveryPreferences?: Entities.CartLineDeliveryPreference[];
    }
    interface LineDeliverySpecification {
        LineId?: string;
        DeliverySpecification?: Entities.DeliverySpecification;
    }
    interface DeliverySpecification {
        DeliveryModeId?: string;
        DeliveryPreferenceTypeValue?: number;
        DeliveryAddress?: Entities.Address;
        PickUpStoreId?: string;
        ElectronicDeliveryEmailAddress?: string;
        ElectronicDeliveryEmailContent?: string;
    }
    interface OrderSearchCriteria {
        CustomerAccountNumber?: string;
        CustomerName?: string;
        EmailAddress?: string;
        SalesId?: string;
        ReceiptId?: string;
        OrderStatusValues?: number[];
        StartDateTime?: Date;
        EndDateTime?: Date;
        ChannelReferenceId?: string;
        StoreId?: string;
        OrderType?: number;
        CustomFilters?: Entities.SearchFilter[];
    }
    interface ReceiptRetrievalCriteria {
        IsCopy?: boolean;
        IsRemoteTransaction?: boolean;
        IsPreview?: boolean;
        QueryBySalesId?: boolean;
        ReceiptTypeValue?: number;
        ShiftId?: number;
        ShiftTerminalId?: string;
        HardwareProfileId?: string;
    }
    interface CartSearchCriteria {
        CartId?: string;
        ExpectedCartVersion?: number;
        CustomerAccountNumber?: string;
        IncludeAnonymous?: boolean;
        SuspendedOnly?: boolean;
        CartTypeValue?: number;
    }
    interface FulfillmentLineParameter {
        SalesId?: string;
        SalesLineNumber?: number;
        Quantity?: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface ShipFulfillmentLine extends FulfillmentLineParameter {
        ProductId?: number;
    }
    interface RejectFulfillmentLine extends FulfillmentLineParameter {
        RejectedQuantity?: number;
        InfoCodeId?: string;
        SubInfoCodeId?: string;
    }
    interface ReadChangedProductsSession {
        Id?: string;
        TotalNumberOfProducts?: number;
        NumberOfProductsRead?: number;
        NumberOfProductsReadInCurrentPage?: number;
        NextSynchronizationToken?: string;
        IsInitialSync?: boolean;
    }
    interface DeletedListingsResult {
        HasMorePublishedListings?: boolean;
        DeletedListings?: Entities.ListingIdentity[];
    }
    interface ListingPublishStatus {
        PublishStatusValue?: number;
        ListingModifiedDateTime?: Date;
        ChannelListingId?: string;
        ChannelId?: number;
        CatalogId?: number;
        ProductId?: number;
        LanguageId?: string;
        AppliedActionValue?: number;
        StatusMessage?: string;
        Tag?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface OrgUnitLocationSearchCriteria {
        OrgUnitNumber?: string;
        OrgUnitName?: string;
    }
    interface StoreHours {
        RegularStoreHours?: Entities.RegularStoreHours;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface CartPromotions {
        HeaderPromotions?: string[];
        CartLinePromotions?: Entities.CartLinePromotion[];
    }
    interface ItemUnit {
        ItemId?: string;
        VariantInventoryDimensionId?: string;
        Product?: number;
        DistinctProductVariant?: number;
        UnitOfMeasure?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface ProductAvailableQuantity {
        ProductId?: number;
        AvailableQuantity?: number;
        UnitOfMeasure?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface OrgUnitAvailabilitySearchCriteria {
        OrgUnitName?: string;
        OrgUnitNumber?: string;
    }
    interface InvoiceSearchCriteria {
        CustomerId?: string;
        InvoiceIds?: string[];
        InvoiceTypeValues?: number[];
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface PickAndPackSalesLineParameter {
        SalesLineNumber?: number;
        Quantity?: number;
    }
    interface ProjectionDomain {
        ChannelId?: number;
        CatalogId?: number;
    }
    interface AffiliationLoyaltyTier {
        AffiliationId?: number;
        LoyaltyTierId?: number;
        AffiliationTypeValue?: number;
        ReasonCodeLines?: Entities.ReasonCodeLine[];
        CustomerId?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface ChargeCode {
        Code?: string;
        ModuleTypeValue?: number;
        Description?: string;
        ItemTaxGroupId?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface PaymentMerchantInformation {
        PaymentConnectorPropertiesXml?: string;
        MerchantPropertiesHashValue?: string;
        ServiceAccountId?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface StoreSafe {
        SafeNumber?: string;
        Name?: string;
        StoreNumber?: string;
        SafeBalance?: number;
        LastUpdatedTime?: Date;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface CreateHardwareStationTokenResult {
        HardwareStationToken?: string;
        PairingKey?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface ValidateHardwareStationTokenResult {
        PairingKey?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface DownloadSession {
        Id?: number;
        JobId?: string;
        JobDescription?: string;
        FileSize?: number;
        RowsAffected?: number;
        Checksum?: string;
        DateDownloaded?: string;
        DateRequested?: string;
        DataStoreName?: string;
        StatusValue?: number;
        Message?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface LoyaltyRewardPointActivity {
        ActivityDate?: Date;
        LoyaltyRewardPointTimelineEntryType?: string;
        ExtensibleLoyaltyRewardPointActivityEntryTypeValue?: number;
        LoyaltyPoints?: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface CurrencyRequest {
        AmountToConvert?: number;
        CurrencyCode?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface HardwareStationProfile {
        RecordId?: number;
        HardwareStationId?: string;
        HardwareStationTypeValue?: number;
        HardwareProfileId?: string;
        HardwareStationName?: string;
        HardwareStationDescription?: string;
        HardwareStationUrl?: string;
        HardwareStationHostName?: string;
        HardwareStationEftTerminalId?: string;
        HardwareConfigurations?: Entities.HardwareConfigurations;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface NameValuePair {
        Name?: string;
        Value?: string;
    }
    interface LinkToExistingCustomerResult {
        EmailAddress?: string;
        ExternalIdentityProvider?: string;
        ExternalIdentityLinkRecordId?: number;
    }
    interface OfflineSyncStatsLine {
        IsUploadJob?: boolean;
        JobDescription?: string;
        LastSyncDateTime?: Date;
        Status?: string;
        FileSize?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface StorageAccessToken {
        Url?: string;
        SasKey?: string;
    }
    interface TaskGuidesSearchResult {
        Lines?: Entities.Line[];
        FrameworkPublisherName?: string;
        FrameworkName?: string;
    }
    interface AuditEvent {
        EventId?: number;
        Channel?: number;
        Store?: string;
        Terminal?: string;
        UploadType?: string;
        EventType?: string;
        DurationInMilliseconds?: number;
        Source?: string;
        EventMessage?: string;
        LogLevel?: string;
        Staff?: string;
        ShiftId?: number;
        ReferenceId?: number;
        RefChannel?: number;
        RefStore?: string;
        RefTerminal?: string;
        RefTransactionId?: string;
        AuditEventTypeValue?: number;
        FiscalTransactions?: Entities.AuditEventFiscalTransaction[];
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface ItemAvailability {
        ItemId?: string;
        VariantInventoryDimensionId?: string;
        InventoryLocationId?: string;
        ProductId?: number;
        AvailableQuantity?: number;
        OrderedSum?: number;
        PhysicalReserved?: number;
        UnitOfMeasure?: string;
        ProductDimensions?: Entities.ProductDimension[];
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface InventoryAvailableToPromise extends ItemAvailability {
        Date?: string;
    }
    interface NotificationItem {
        Action?: number;
        ActionName?: string;
        NotificationDetails?: Entities.NotificationDetail[];
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface FiscalIntegrationDocumentRetrievalCriteria {
        TransactionId?: string;
        IsRemoteTransaction?: boolean;
        QueryBySalesId?: boolean;
        FiscalRegistrationEventTypeValue?: number;
        ShiftId?: number;
        ShiftTerminalId?: string;
        DocumentContext?: Entities.FiscalIntegrationDocumentContext;
    }
    interface FiscalIntegrationDocument {
        Document?: string;
        DocumentGenerationResultTypeValue?: number;
        FiscalConnectorTechnicalProfile?: Entities.FiscalIntegrationTechnicalProfile;
        DocumentAdjustment?: Entities.FiscalIntegrationDocumentAdjustment;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface FiscalIntegrationRegistrationResult {
        TransactionID?: string;
        Response?: string;
        SubmittedDocument?: string;
        RegisterInfo?: string;
        RegistrationStatusValue?: number;
        FiscalRegistrationEventTypeValue?: number;
        DocumentAdjustment?: Entities.FiscalIntegrationDocumentAdjustment;
        ReasonCodeLines?: Entities.ReasonCodeLine[];
    }
    interface FiscalIntegrationRegistrationProcess {
        RecordId?: number;
        RegistrationProcessId?: string;
        Description?: string;
        RegistrationProcessLines?: Entities.FiscalIntegrationRegistrationProcessLine[];
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface FiscalIntegrationSupportedEvents {
        FunctionalityProfileGroupId?: string;
        SupportedFiscalEventTypes?: number[];
        SupportedNonFiscalEventTypes?: number[];
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface FiscalIntegrationTechnicalProfile {
        ProfileId?: string;
        Description?: string;
        ConnectorName?: string;
        ConnectorTypeValue?: number;
        TechnicalProfile?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface ExtensionProfile {
        ExtensionServiceUrl?: string;
        AttachedServices?: Entities.AttachedService[];
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface AttributeProduct {
        RecordId?: number;
        Name?: string;
        KeyName?: string;
        DataTypeValue?: number;
        NameTranslations?: Entities.TextValueTranslation[];
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface MediaBlob {
        MediaType?: string;
        Content?: string;
        IsDefault?: boolean;
        AltText?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface TerminalInfo {
        TerminalId?: string;
        DeviceNumber?: string;
        Name?: string;
        DeviceType?: number;
        ActivationStatusValue?: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface ExtensibleEnumerationContainer {
        TypeName?: string;
        ExtensibleEnumerations?: Entities.ExtensibleEnumeration[];
    }
    interface PackingSlipData {
        PackingSlipId?: string;
        CreatedDateTime?: Date;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface OrgUnitAddress extends Address {
    }
    interface WarehouseDetails extends Address {
        InventoryLocationId?: string;
    }
    interface AttributeBooleanValue extends AttributeValueBase {
        Value?: boolean;
    }
    interface AttributeCurrencyValue extends AttributeValueBase {
        CurrencyValue?: number;
        CurrencyCode?: string;
    }
    interface AttributeDateTimeOffsetValue extends AttributeValueBase {
        Value?: Date;
    }
    interface AttributeFloatValue extends AttributeValueBase {
        Value?: number;
        UnitSymbol?: string;
    }
    interface AttributeIntValue extends AttributeValueBase {
        Value?: number;
        UnitSymbol?: string;
    }
    interface AttributeMediaLocationValue extends AttributeValueBase {
        Value?: Entities.MediaLocation[];
    }
    interface AttributeTextValue extends AttributeValueBase {
        TextValue?: string;
        TextValueTranslations?: Entities.TextValueTranslation[];
    }
    interface ButtonGridButton {
        Action?: number;
        ActionProperty?: string;
        BackColorAsARGB?: Entities.ARGBColor;
        BorderColorAsARGB?: Entities.ARGBColor;
        Column?: number;
        ColumnSpan?: number;
        DisplayText?: string;
        FontColorAsARGB?: Entities.ARGBColor;
        ButtonId?: number;
        Row?: number;
        RowSpan?: number;
        UseCustomLookAndFeel?: boolean;
        PictureAsBase64?: string;
        FontStyle?: number;
        FontSize?: number;
        EnableCustomFontForPOS?: boolean;
        HideButtonText?: boolean;
        Tooltip?: string;
        EnableLiveContent?: boolean;
        NotificationContentAlignment?: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface ARGBColor {
        A?: number;
        R?: number;
        G?: number;
        B?: number;
    }
    interface ExtensiblePeriodicDiscountOfferType extends ExtensibleEnumeration {
    }
    interface ChargeLineOverride {
        OriginalAmount?: number;
        OverrideAmount?: number;
        OverrideReasonDescription?: string;
        OverrideDateTime?: Date;
        UserId?: string;
    }
    interface TaxLineGTE extends TaxLine {
        TaxComponent?: string;
    }
    interface TaxMeasure {
        Path?: string;
        Value?: number;
        DataAreaId?: string;
        SaleLineNumber?: number;
        StoreId?: string;
        TerminalId?: string;
        TransactionId?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface CardTokenInfo {
        CardToken?: string;
        UniqueCardId?: string;
        ServiceAccountId?: string;
        MaskedCardNumber?: string;
    }
    interface TrackingInfo {
        TrackingNumber?: string;
        ServiceType?: string;
        PackageWeight?: Entities.Weight;
        ShippedOnDate?: Date;
        Status?: string;
        DeliveredOnDate?: Date;
        EstimatedDeliveryDate?: Date;
        TrackingUrl?: string;
        PackagingType?: string;
        DestinationAddress?: Entities.Address;
        OriginAddress?: Entities.Address;
        ShipmentProgress?: Entities.ShipmentProgress[];
        ShippingCharge?: number;
    }
    interface Weight {
        Value?: number;
        Unit?: string;
    }
    interface ShipmentProgress {
        Location?: Entities.Address;
        DateTime?: Date;
        Activity?: string;
    }
    interface ShiftKey {
        ShiftTerminalId?: string;
        ShiftId?: number;
        Store?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface AddressFormattingInfo {
        AddressComponentNameValue?: number;
        LineNumber?: number;
        IsDataEntryOnly?: boolean;
        NewLine?: boolean;
        Expand?: boolean;
        Inactive?: boolean;
        Special?: boolean;
        NumberOfSpaces?: number;
        Separator?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface ScaleUnitConfiguration {
        Id?: string;
        Name?: string;
        Region?: string;
    }
    interface HardwareConfigurations {
        CashDrawerConfigurations?: Entities.HardwareConfiguration[];
        PrinterConfigurations?: Entities.HardwareConfiguration[];
        PinPadConfiguration?: Entities.HardwareConfiguration;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface HardwareConfiguration {
        RecordId?: number;
        HardwareStationRecordId?: number;
        TerminalId?: string;
        DeviceName?: string;
        IPAddress?: string;
        Port?: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface PaymentError {
        Code?: string;
        Message?: string;
        IsLocalized?: boolean;
    }
    interface Printer {
        Name?: string;
        PrinterType?: number;
        Terminal?: number;
        PrintBehaviorValue?: number;
        ReceiptLayoutId?: string;
        HardwareProfileId?: string;
        ReceiptType?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface UnitOfMeasureConversion {
        ItemId?: string;
        FromUnitOfMeasureId?: string;
        ToUnitOfMeasureId?: string;
        FromUnitOfMeasureSymbol?: string;
        ToUnitOfMeasureSymbol?: string;
        IsBackward?: boolean;
        RecordId?: number;
        ProductRecordId?: number;
        Factor?: number;
        Numerator?: number;
        Denominator?: number;
        InnerOffset?: number;
        OuterOffset?: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface PriceLine {
        RecordId?: number;
        Value?: number;
        PriceMethod?: string;
        OriginId?: string;
        PriceChangedByExtensions?: boolean;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface BasePriceLine extends PriceLine {
    }
    interface PriceAdjustmentPriceLine extends PriceLine {
        IsCompoundable?: boolean;
        Concurrency?: string;
    }
    interface TradeAgreementPriceLine extends PriceLine {
    }
    interface ReturnLabelContent {
        ReturnLocationText?: string;
        ReturnWarehouseText?: string;
        ReturnReasonText?: string;
        ReturnPalleteText?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface LoyaltyRewardPointLine {
        TransactionId?: string;
        SaleLineNumber?: number;
        LoyaltyGroupRecordId?: number;
        LoyaltyCardNumber?: string;
        CustomerAccount?: string;
        EntryDate?: Date;
        EntryTime?: number;
        EntryTypeValue?: number;
        ExpirationDate?: Date;
        LineNumber?: number;
        LoyaltyTierRecordId?: number;
        RewardPointRecordId?: number;
        RewardPointAmountQuantity?: number;
        RewardPointId?: string;
        RewardPointIsRedeemable?: boolean;
        RewardPointType?: string;
        RewardPointCurrency?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface TransferOrderJournalLine {
        ItemId?: string;
        ItemName?: string;
        InventDimId?: string;
        TotalQuantityShipped?: number;
        QuantityShipped?: number;
        TransferQuantity?: number;
        UnitId?: string;
        ConfigId?: string;
        InventSizeId?: string;
        InventColorId?: string;
        InventStyleId?: string;
        DeliveryMethod?: string;
        Barcode?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface KitTransactionLine {
        ItemId?: string;
        Quantity?: number;
        InventoryDimensionId?: string;
        ProductId?: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface TenderDetail {
        LineNumber?: number;
        Amount?: number;
        AmountInForeignCurrency?: number;
        ForeignCurrencyExchangeRate?: number;
        ForeignCurrency?: string;
        BankBagNumber?: string;
        TenderTypeId?: string;
        TenderRecount?: number;
        DenominationDetails?: Entities.DenominationDetail[];
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface DenominationDetail {
        Type?: number;
        Currency?: string;
        DenominationAmount?: number;
        QuantityDeclared?: number;
        AmountDeclared?: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface ButtonGridZone {
        ButtonGridId?: string;
        ZoneId?: string;
        ZoneName?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface ImageZone {
        PictureId?: number;
        PictureAsBase64?: string;
        ZoneId?: string;
        ZoneName?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface ReportZone {
        ReportRecordId?: number;
        ZoneId?: string;
        ZoneName?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface SalesInvoiceLine {
        RecordId?: number;
        ItemId?: string;
        ProductName?: string;
        InventDimensionId?: string;
        InventTransactionId?: string;
        Quantity?: number;
        Price?: number;
        DiscountPercent?: number;
        DiscountAmount?: number;
        BatchId?: string;
        NetAmount?: number;
        Site?: string;
        Warehouse?: string;
        SerialId?: string;
        ColorId?: string;
        SizeId?: string;
        StyleId?: string;
        ConfigId?: string;
        ColorName?: string;
        SizeName?: string;
        StyleName?: string;
        ConfigName?: string;
        SalesTaxGroup?: string;
        ItemTaxGroup?: string;
        SalesMarkup?: number;
        TotalDiscount?: number;
        TotalPercentageDiscount?: number;
        LineDiscount?: number;
        PeriodicDiscount?: number;
        PeriodicPercentageDiscount?: number;
        LineManualDiscountPercentage?: number;
        LineManualDiscountAmount?: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface ReportRow {
        RowData?: Entities.CommerceProperty[];
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface FormAnnotation extends Annotation {
        MenuItemLabel?: string;
        MenuItemName?: string;
        MenuItemType?: string;
    }
    interface TaskGuideAnnotation extends Annotation {
        RecordingValueType?: string;
        Title?: string;
        ExampleText?: string;
        Hidden?: boolean;
        GlobalId?: string;
    }
    interface CommandArgument {
        Value?: string;
        IsReference?: boolean;
    }
    interface PropertyUserAction extends FormUserAction {
        Value?: string;
        ValueLabel?: string;
        PropertyName?: string;
        ControlName?: string;
        ControlType?: string;
        UserActionType?: string;
        IsReference?: boolean;
        LabelId?: string;
    }
    interface InfoUserAction extends UserAction {
        FormId?: string;
        ControlLabel?: string;
        ControlLabelId?: string;
        ControlName?: string;
        Text?: string;
        Notes?: string;
    }
    interface MenuItemUserAction extends UserAction {
        MenuItemName?: string;
        MenuItemType?: string;
        NavigationPath?: string[];
    }
    interface ValidationUserAction extends UserAction {
        Name?: string;
        Comment?: string;
    }
    interface ArtifactSummary {
        ArtifactType?: string;
        LanguageTags?: string[];
    }
    interface MetadataPropertyValue {
        PropertyId?: string;
        SingleValue?: string;
        MultiValue?: Entities.MetadataText[];
        Tags?: string[];
        ComboBox?: string;
        MultiSelect?: string[];
        Links?: Entities.MetadataHypertextLink[];
    }
    interface MetadataText {
        Id?: string;
        Text?: string;
    }
    interface MetadataHypertextLink {
        Id?: string;
        DisplayName?: string;
        Url?: string;
    }
    interface FormContext {
        FormID?: string;
        FormName?: string;
        RecordingName?: string;
        HasMetadata?: boolean;
        Sequence?: number;
        Annotations?: Entities.Annotation[];
    }
    interface FiscalTransactionTenderLineAdjustment {
        TenderLineNumber?: number;
        AdjustmentAmount?: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface FiscalTransactionSalesLineAdjustment {
        SalesLineNumber?: number;
        Exclude?: boolean;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface SalesAffiliationLoyaltyTier extends AffiliationLoyaltyTier {
        TransactionId?: string;
        ChannelId?: number;
        TerminalId?: string;
        ReceiptId?: string;
        StaffId?: string;
    }
    interface TaxViewLine {
        TaxId?: string;
        TaxAmount?: number;
    }
    interface Coupon {
        CodeId?: string;
        Code?: string;
        DiscountOfferId?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface CustomerAccountDepositLine {
        Amount?: number;
        CustomerAccount?: string;
        Comment?: string;
        StoreNumber?: string;
        Terminal?: string;
        Shift?: string;
        TransactionStatusValue?: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface CustomerAttribute {
        AttributeValue?: Entities.CommercePropertyValue;
        Units?: string;
        RecordId?: number;
        Name?: string;
        KeyName?: string;
        DataTypeValue?: number;
        NameTranslations?: Entities.TextValueTranslation[];
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface ShiftTaxLine {
        TaxCode?: string;
        TaxAmount?: number;
        TaxRate?: number;
        NetAmount?: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface LinkedProduct {
        ProductRecordId?: number;
        LinkedProductRecordId?: number;
        Quantity?: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface RelatedProduct {
        ProductRecordId?: number;
        RelatedProductRecordId?: number;
        CatalogId?: number;
        RelationName?: string;
        IsExcludedRelation?: boolean;
        IsDirectRelation?: boolean;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface KitComponent {
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface ListingIdentity {
        ProductId?: number;
        LanguageId?: string;
        CatalogId?: number;
        Tag?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface RegularStoreHours {
        MondayOpenTime?: number;
        MondayCloseTime?: number;
        IsClosedOnMonday?: boolean;
        TuesdayOpenTime?: number;
        TuesdayCloseTime?: number;
        IsClosedOnTuesday?: boolean;
        WednesdayOpenTime?: number;
        WednesdayCloseTime?: number;
        IsClosedOnWednesday?: boolean;
        ThursdayOpenTime?: number;
        ThursdayCloseTime?: number;
        IsClosedOnThursday?: boolean;
        FridayOpenTime?: number;
        FridayCloseTime?: number;
        IsClosedOnFriday?: boolean;
        SaturdayOpenTime?: number;
        SaturdayCloseTime?: number;
        IsClosedOnSaturday?: boolean;
        SundayOpenTime?: number;
        SundayCloseTime?: number;
        IsClosedOnSunday?: boolean;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface ExtensibleAuditEventType extends ExtensibleEnumeration {
    }
    interface AuditEventFiscalTransaction {
        EventId?: number;
        LineNumber?: number;
        RegisterResponse?: string;
        Store?: string;
        TransDateTime?: Date;
        Terminal?: string;
        UploadType?: string;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface NotificationDetail {
        ActionProperty?: string;
        ItemCount?: number;
        DisplayText?: string;
        IsNew?: boolean;
        LastUpdatedDateTimeStr?: string;
        IsSuccess?: boolean;
        IsLiveContentOnly?: boolean;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface FiscalIntegrationDocumentContext {
        AuditEvent?: Entities.AuditEvent;
    }
    interface FiscalIntegrationDocumentAdjustment {
        TenderLineAdjustments?: Entities.FiscalTransactionTenderLineAdjustment[];
        SalesLineAdjustments?: Entities.FiscalTransactionSalesLineAdjustment[];
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface FiscalIntegrationRegistrationProcessLine {
        RegistrationProcessId?: string;
        SequenceNumber?: number;
        Priority?: number;
        ConnectorTypeValue?: number;
        FunctionalityProfileGroupId?: string;
        AllowSkip?: boolean;
        AllowMarkAsRegistered?: boolean;
        RegistrationSettings?: Entities.FiscalIntegrationRegistrationSettings;
        SupportedFiscalEventTypes?: number[];
        SupportedNonFiscalEventTypes?: number[];
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface FiscalIntegrationRegistrationSettings {
        SkipReasonCode?: string;
        MarkAsRegisteredReasonCode?: string;
    }
    interface AttachedService {
        BaseUrl?: string;
        ServiceId?: string;
        StatusValue?: number;
        ExtensionProperties?: Entities.CommerceProperty[];
    }
    interface ParameterSet {
    }
    interface CommerceException {
        LocalizedMessage?: string;
        ErrorResourceId?: string;
    }
    interface DataValidationException extends CommerceException {
        ValidationResults?: Entities.DataValidationFailure[];
    }
    interface MissingRequiredReasonCodeException extends DataValidationException {
        RequiredReasonCodes?: Entities.ReasonCode[];
        TransactionRequiredReasonCodeIds?: string[];
        ReasonCodeRequirements?: Entities.ReasonCodeRequirement[];
    }
    interface SecurityException extends CommerceException {
    }
    interface DeviceAuthenticationException extends SecurityException {
    }
    interface HeadquarterTransactionServiceException extends CommerceException {
    }
    interface UserAuthenticationException extends SecurityException {
    }
    interface UserAuthorizationException extends SecurityException {
    }
    interface FeatureNotSupportedException extends CommerceException {
    }
    interface CartValidationException extends DataValidationException {
    }
    interface TenderValidationException extends DataValidationException {
        TenderTypeId?: string;
    }
    interface PaymentException extends CommerceException {
        PaymentSdkErrors?: Entities.PaymentError[];
    }
    interface CommerceDataExchangeException extends CommerceException {
    }
    interface ExtensibleEnumerationException extends CommerceException {
    }
    interface DataValidationFailure {
        ErrorContext?: string;
        ErrorResourceId?: string;
        MemberNames?: string[];
        LocalizedMessage?: string;
    }
    interface ItemDiscontinuedException extends CommerceException {
        RemovedUnavailableItemIds?: string;
    }
    interface InsufficientCredentialLengthException extends DataValidationException {
        ActualLength?: number;
        MinLength?: number;
    }
    interface StaffPasswordExpiredException extends UserAuthenticationException {
        StaffId?: string;
    }
    interface WrongEndpointException extends CommerceException {
        RedirectUri?: string;
    }
    class CategoryClass implements Category {
        RecordId: number;
        OfflineImage: string;
        Name: string;
        ParentCategory: number;
        Images: Entities.MediaLocation[];
        NameTranslations: Entities.TextValueTranslation[];
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class CartClass implements Cart {
        AffiliationLines: Entities.AffiliationLoyaltyTier[];
        IsRequiredAmountPaid: boolean;
        IsDiscountFullyCalculated: boolean;
        IgnoreDiscountCalculation: boolean;
        AmountDue: number;
        AmountPaid: number;
        AttributeValues: Entities.AttributeValueBase[];
        BeginDateTime: Date;
        BusinessDate: Date;
        CancellationChargeAmount: number;
        EstimatedShippingAmount: number;
        CartLines: Entities.CartLine[];
        CartTypeValue: number;
        ChannelId: number;
        ChargeAmount: number;
        CustomerOrderRemainingBalance: number;
        ChargeLines: Entities.ChargeLine[];
        TaxViewLines: Entities.TaxViewLine[];
        Comment: string;
        InvoiceComment: string;
        Coupons: Entities.Coupon[];
        CustomerId: string;
        CustomerOrderModeValue: number;
        DeliveryMode: string;
        DeliveryModeChargeAmount: number;
        DiscountAmount: number;
        DiscountAmountWithoutTax: number;
        DiscountCodes: string[];
        Id: string;
        SuspendedCartId: string;
        TransactionTypeValue: number;
        CustomerAccountDepositLines: Entities.CustomerAccountDepositLine[];
        IncomeExpenseLines: Entities.IncomeExpenseLine[];
        IncomeExpenseTotalAmount: number;
        IsReturnByReceipt: boolean;
        ReturnTransactionHasLoyaltyPayment: boolean;
        IsFavorite: boolean;
        IsRecurring: boolean;
        IsSuspended: boolean;
        LoyaltyCardId: string;
        ModifiedDateTime: Date;
        Name: string;
        OrderNumber: string;
        AvailableDepositAmount: number;
        OverriddenDepositAmount: number;
        OverriddenDepositWithoutCarryoutAmount: number;
        PrepaymentAmountPaid: number;
        PrepaymentAppliedOnPickup: number;
        PromotionLines: string[];
        QuotationExpiryDate: Date;
        ReasonCodeLines: Entities.ReasonCodeLine[];
        ReceiptEmail: string;
        RequestedDeliveryDate: Date;
        RequiredDepositAmount: number;
        RequiredDepositWithoutCarryoutAmount: number;
        SalesId: string;
        ShippingAddress: Entities.Address;
        StaffId: string;
        SubtotalAmount: number;
        SubtotalAmountWithoutTax: number;
        NetPrice: number;
        SubtotalSalesAmount: number;
        TaxAmount: number;
        TaxOnCancellationCharge: number;
        TaxOverrideCode: string;
        TenderLines: Entities.TenderLine[];
        TerminalId: string;
        TotalAmount: number;
        TotalSalesAmount: number;
        TotalReturnAmount: number;
        TotalCarryoutSalesAmount: number;
        TotalCustomerOrderSalesAmount: number;
        TotalManualDiscountAmount: number;
        TotalManualDiscountPercentage: number;
        WarehouseId: string;
        IsCreatedOffline: boolean;
        CartStatusValue: number;
        ReceiptTransactionTypeValue: number;
        CommissionSalesGroup: string;
        Version: number;
        TotalItems: number;
        HasTaxCalculationTriggered: boolean;
        MerchantProperties: Entities.PaymentMerchantInformation[];
        HasChargeCalculationTriggered: boolean;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class CustomerClass implements Customer {
        AccountNumber: string;
        RecordId: number;
        CreatedDateTime: Date;
        ChargeGroup: string;
        PriceGroup: string;
        IsCustomerTaxInclusive: boolean;
        Phone: string;
        PhoneRecordId: number;
        PhoneExt: string;
        Cellphone: string;
        Email: string;
        EmailRecordId: number;
        Url: string;
        UrlRecordId: number;
        Name: string;
        PersonNameId: number;
        FirstName: string;
        MiddleName: string;
        LastName: string;
        DirectoryPartyRecordId: number;
        PartyNumber: string;
        CustomerTypeValue: number;
        Language: string;
        CustomerGroup: string;
        CurrencyCode: string;
        CNPJCPFNumber: string;
        IdentificationNumber: string;
        InvoiceAccount: string;
        MandatoryCreditLimit: boolean;
        CreditRating: string;
        CreditLimit: number;
        Balance: number;
        Blocked: boolean;
        BlockedType: number;
        UseOrderNumberReference: boolean;
        OrganizationId: string;
        UsePurchaseRequest: boolean;
        MultilineDiscountGroup: string;
        TotalDiscountGroup: string;
        LineDiscountGroup: string;
        TaxGroup: string;
        SalesTaxGroup: string;
        TaxExemptNumber: string;
        VatNumber: string;
        TaxOffice: string;
        NonChargeableAccount: boolean;
        Tag: string;
        ReceiptSettings: number;
        ReceiptEmail: string;
        RetailCustomerTableRecordId: number;
        OfflineImage: string;
        IsAsyncCustomer: boolean;
        NewCustomerPartyNumber: string;
        CustomerAffiliations: Entities.CustomerAffiliation[];
        Addresses: Entities.Address[];
        Attributes: Entities.CustomerAttribute[];
        Images: Entities.MediaLocation[];
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class EmployeeClass implements Employee {
        StaffId: string;
        NameOnReceipt: string;
        Name: string;
        CultureName: string;
        NumberOfDaysToPasswordExpiry: number;
        Permissions: Entities.EmployeePermissions;
        Images: Entities.MediaLocation[];
        DefaultImage: string;
        DefaultCommissionSalesGroup: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class SalesOrderClass implements SalesOrder {
        DocumentStatusValue: number;
        RecordId: number;
        StatusValue: number;
        AffiliationLoyaltyTierLines: Entities.SalesAffiliationLoyaltyTier[];
        IsRequiredAmountPaid: boolean;
        IsDiscountFullyCalculated: boolean;
        IgnoreDiscountCalculation: boolean;
        AmountDue: number;
        EstimatedShippingAmount: number;
        AmountPaid: number;
        CustomerOrderRemainingBalance: number;
        AttributeValues: Entities.AttributeValueBase[];
        AvailableDepositAmount: number;
        BeginDateTime: Date;
        CreatedDateTime: Date;
        BusinessDate: Date;
        CalculatedDepositAmount: number;
        CancellationCharge: number;
        ChannelId: number;
        ChannelReferenceId: string;
        ChargeAmount: number;
        ChargeLines: Entities.ChargeLine[];
        Comment: string;
        Coupons: Entities.Coupon[];
        InvoiceComment: string;
        ContactInformationCollection: Entities.ContactInformation[];
        CurrencyCode: string;
        CustomerAccountDepositLines: Entities.CustomerAccountDepositLine[];
        CustomerId: string;
        CustomerOrderModeValue: number;
        CustomerOrderTypeValue: number;
        DeliveryMode: string;
        DeliveryModeChargeAmount: number;
        DiscountAmount: number;
        DiscountAmountWithoutTax: number;
        NetPrice: number;
        DiscountCodes: string[];
        EntryStatusValue: number;
        GrossAmount: number;
        HasLoyaltyPayment: boolean;
        Id: string;
        SuspendedTransactionId: string;
        IncomeExpenseLines: Entities.IncomeExpenseLine[];
        IncomeExpenseTotalAmount: number;
        InventoryLocationId: string;
        IsCreatedOffline: boolean;
        IsReturnByReceipt: boolean;
        IsSuspended: boolean;
        IsTaxIncludedInPrice: boolean;
        LineDiscount: number;
        LineDiscountCalculationTypeValue: number;
        LoyaltyCardId: string;
        LoyaltyDiscountAmount: number;
        LoyaltyManualDiscountAmount: number;
        LoyaltyRewardPointLines: Entities.LoyaltyRewardPointLine[];
        ModifiedDateTime: Date;
        Name: string;
        NetAmount: number;
        NetAmountWithoutTax: number;
        NetAmountWithNoTax: number;
        NetAmountWithTax: number;
        NumberOfItems: number;
        OverriddenDepositAmount: number;
        OverriddenDepositWithoutCarryoutAmount: number;
        PeriodicDiscountAmount: number;
        PrepaymentAmountAppliedOnPickup: number;
        PrepaymentAmountInvoiced: number;
        PrepaymentAmountPaid: number;
        QuotationExpiryDate: Date;
        ReasonCodeLines: Entities.ReasonCodeLine[];
        ReceiptEmail: string;
        ReceiptId: string;
        RequestedDeliveryDate: Date;
        RequiredDepositAmount: number;
        RequiredDepositWithoutCarryoutAmount: number;
        ReturnTransactionHasLoyaltyPayment: boolean;
        SalesId: string;
        SalesPaymentDifference: number;
        SalesLines: Entities.SalesLine[];
        ShiftId: number;
        ShiftTerminalId: string;
        ShippingAddress: Entities.Address;
        StaffId: string;
        StatementCode: string;
        StoreId: string;
        SubtotalAmount: number;
        SubtotalAmountWithoutTax: number;
        SubtotalSalesAmount: number;
        TaxAmount: number;
        TaxAmountExclusive: number;
        TaxAmountInclusive: number;
        TaxLines: Entities.TaxLine[];
        TaxOnCancellationCharge: number;
        TaxOverrideCode: string;
        TenderLines: Entities.TenderLine[];
        TerminalId: string;
        TotalAmount: number;
        TotalSalesAmount: number;
        TotalReturnAmount: number;
        TotalCarryoutSalesAmount: number;
        TotalCustomerOrderSalesAmount: number;
        TotalDiscount: number;
        TotalManualDiscountAmount: number;
        TotalManualDiscountPercentage: number;
        TransactionTypeValue: number;
        TaxCalculationTypeValue: number;
        SalesInvoiceAmount: number;
        GiftCardActiveFrom: Date;
        GiftCardBalance: number;
        GiftCardExpireDate: Date;
        GiftCardHistoryDetails: string;
        GiftCardIssueAmount: number;
        GiftCardIdMasked: string;
        CommissionSalesGroup: string;
        HasTaxCalculationTriggered: boolean;
        HasChargeCalculationTriggered: boolean;
        FiscalTransactions: Entities.FiscalTransaction[];
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ShiftClass implements Shift {
        ShiftId: number;
        TerminalId: string;
        StartingAmountTotal: number;
        FloatingEntryAmountTotal: number;
        AddToTenderAmountTotal: number;
        SafeDropTotal: number;
        BankDropTotal: number;
        RemoveTenderAmountTotal: number;
        DeclareTenderAmountTotal: number;
        OverShortTotal: number;
        TenderedTotal: number;
        ChangeTotal: number;
        IncomeAccountTotal: number;
        ExpenseAccountTotal: number;
        CashDrawer: string;
        StoreRecordId: number;
        StoreId: string;
        StaffId: string;
        CurrentStaffId: string;
        StatusValue: number;
        StartDateTime: Date;
        CloseDateTime: Date;
        ClosedAtTerminalId: string;
        CurrentTerminalId: string;
        SalesTotal: number;
        StatusDateTime: Date;
        ReturnsTotal: number;
        PaidToAccountTotal: number;
        TaxTotal: number;
        ChargeTotal: number;
        DiscountTotal: number;
        RoundedAmountTotal: number;
        CustomerCount: number;
        SaleTransactionCount: number;
        NoSaleTransactionCount: number;
        VoidTransactionCount: number;
        LogOnTransactionCount: number;
        SuspendedTransactionCount: number;
        TransactionCount: number;
        ReceiptsCount: number;
        ReturnsCount: number;
        GoodsSoldQty: number;
        ServicesSoldQty: number;
        ReceiptCopiesCount: number;
        ReceiptCopiesTotal: number;
        PriceOverrideTotal: number;
        SuspendedTotal: number;
        SalesTotalIncludingTax: number;
        SalesTotalExcludingTax: number;
        SalesGrandTotal: number;
        ReturnsGrandTotal: number;
        TaxLines: Entities.ShiftTaxLine[];
        TenderLines: Entities.ShiftTenderLine[];
        AccountLines: Entities.ShiftAccountLine[];
        IsShared: boolean;
        GiftCardsTotal: number;
        GiftCardCashOutTotal: number;
        VoidedSalesTotal: number;
        ShiftSalesTotal: number;
        ShiftReturnsTotal: number;
        NumberOfUnreconciledLines: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class StockCountJournalClass implements StockCountJournal {
        JournalId: string;
        RecordId: string;
        Description: string;
        InventLocationId: string;
        DataAreaId: string;
        StockCountTransactionLines: Entities.StockCountJournalTransaction[];
        Worker: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class OrgUnitClass implements OrgUnit {
        OrgUnitNumber: string;
        RecordId: number;
        InventoryLocationId: string;
        OMOperatingUnitNumber: string;
        TaxGroup: string;
        FunctionalityProfileId: string;
        UseCustomerBasedTax: boolean;
        UseDestinationBasedTax: boolean;
        Currency: string;
        OrgUnitAddress: Entities.Address;
        OrgUnitFullAddress: string;
        OrgUnitName: string;
        Latitude: number;
        Longitude: number;
        EmailReceiptProfileId: string;
        ShippingWarehouseAddress: Entities.Address;
        DefaultCustomerAccount: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ProductClass implements Product {
        RecordId: number;
        ProductName: string;
        ProductNumber: string;
        Description: string;
        IsMasterProduct: boolean;
        IsKit: boolean;
        ItemId: string;
        HasLinkedProducts: boolean;
        Rules: Entities.ProductRules;
        DefaultUnitOfMeasure: string;
        Name: string;
        Locale: string;
        OfflineImage: string;
        IsRemote: boolean;
        ChangeTrackingInformation: Entities.ProductChangeTrackingInformation;
        Image: Entities.RichMediaLocations;
        UnitsOfMeasureSymbol: string[];
        LinkedProducts: Entities.LinkedProduct[];
        BasePrice: number;
        Price: number;
        AdjustedPrice: number;
        RetailContext: Entities.ProjectionDomain;
        PrimaryCategoryId: number;
        CategoryIds: number[];
        RelatedProducts: Entities.RelatedProduct[];
        ProductsRelatedToThis: Entities.RelatedProduct[];
        ProductSchema: string[];
        ProductProperties: Entities.ProductPropertyTranslation[];
        CompositionInformation: Entities.ProductCompositionInformation;
        ParentKits: Entities.KitComponent[];
        SearchName: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ProductCatalogClass implements ProductCatalog {
        RecordId: number;
        Name: string;
        Description: string;
        Language: string;
        IsSnapshotEnabled: boolean;
        ValidFrom: Date;
        ValidTo: Date;
        CreatedOn: Date;
        ModifiedOn: Date;
        PublishedOn: Date;
        Images: Entities.MediaLocation[];
        ChannelId: number;
        DefaultImage: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class CommerceListClass implements CommerceList {
        Id: number;
        Name: string;
        CustomerId: string;
        CustomerName: string;
        IsFavorite: boolean;
        IsRecurring: boolean;
        IsPrivate: boolean;
        IsCollaborative: boolean;
        CreatedDateTime: Date;
        DueDateTime: Date;
        CommerceListTypeValue: number;
        CommerceListLines: Entities.CommerceListLine[];
        CommerceListContributors: Entities.CommerceListContributor[];
        CommerceListInvitations: Entities.CommerceListInvitation[];
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class TransferOrderClass implements TransferOrder {
        OrderId: string;
        RecordId: string;
        Status: string;
        Lines: number;
        TotalItems: number;
        OrderTypeValue: number;
        InventLocationIdFrom: string;
        InventLocationIdTo: string;
        QuantityShipped: number;
        QuantityReceived: number;
        QuantityShipNow: number;
        QuantityReceiveNow: number;
        QuantityShipRemaining: number;
        QuantityReceiveRemaining: number;
        ShipDate: Date;
        ReceiveDate: Date;
        DeliveryModeId: string;
        OrderLines: Entities.TransferOrderLine[];
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class PurchaseOrderClass implements PurchaseOrder {
        OrderId: string;
        RecordId: string;
        Status: string;
        Lines: number;
        TotalItems: number;
        OrderTypeValue: number;
        TotalReceived: number;
        OrderLines: Entities.PurchaseOrderLine[];
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class PickingListClass implements PickingList {
        OrderId: string;
        RecordId: string;
        Status: string;
        Lines: number;
        TotalItems: number;
        OrderTypeValue: number;
        InventLocationId: string;
        DeliveryDate: Date;
        DeliveryMode: string;
        TotalReceived: number;
        OrderLines: Entities.PickingListLine[];
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class WarehouseClass implements Warehouse {
        InventLocation: string;
        Name: string;
        IsWMSEnabled: boolean;
        DefaultInventoryStatus: string;
        DefaultReceiptLocation: string;
        DefaultLocationId: string;
        DefaultIssueLocation: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ScanResultClass implements ScanResult {
        ScannedText: string;
        MaskTypeValue: number;
        Barcode: Entities.Barcode;
        Product: Entities.SimpleProduct;
        LoyaltyCard: Entities.LoyaltyCard;
        GiftCard: Entities.GiftCard;
        ExtensionProperties: Entities.CommerceProperty[];
        Customer: Entities.Customer;
        static customerPropertyName: string;
        constructor(odataObject?: any);
    }
    class OrderShipmentsClass implements OrderShipments {
        SalesId: string;
        Shipments: Entities.Shipment[];
        SalesLines: Entities.SalesLine[];
        CreatedDateTime: Date;
        Status: string;
        CurrencyCode: string;
        CustomerId: string;
        DeliveryMode: string;
        GrossAmount: number;
        InventoryLocationId: string;
        ReceiptId: string;
        RequestedDeliveryDate: Date;
        TotalAmount: number;
        TaxAmount: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class SuspendedCartClass implements SuspendedCart {
        Id: string;
        ReceiptId: string;
        ShiftId: number;
        ShiftTerminalId: string;
        ExtensionProperties: Entities.CommerceProperty[];
        Cart: Entities.Cart;
        static cartPropertyName: string;
        constructor(odataObject?: any);
    }
    class ExtensibleEnumerationClass implements ExtensibleEnumeration {
        Name: string;
        Value: number;
        constructor(odataObject?: any);
    }
    class ExtensibleEnumeration_1OfTClass extends ExtensibleEnumerationClass implements ExtensibleEnumeration_1OfT {
        constructor(odataObject?: any);
    }
    class ExtensibleTransactionTypeClass extends ExtensibleEnumerationClass implements ExtensibleTransactionType {
        constructor(odataObject?: any);
    }
    class ExtensibleSalesTransactionTypeClass extends ExtensibleEnumerationClass implements ExtensibleSalesTransactionType {
        constructor(odataObject?: any);
    }
    class FulfillmentLineStatusClass extends ExtensibleEnumerationClass implements FulfillmentLineStatus {
        constructor(odataObject?: any);
    }
    class FulfillmentLineDeliveryTypeClass extends ExtensibleEnumerationClass implements FulfillmentLineDeliveryType {
        constructor(odataObject?: any);
    }
    class ExtensibleAddressTypeClass extends ExtensibleEnumerationClass implements ExtensibleAddressType {
        constructor(odataObject?: any);
    }
    class ExtensibleLoyaltyRewardPointActivityEntryTypeClass extends ExtensibleEnumerationClass implements ExtensibleLoyaltyRewardPointActivityEntryType {
        constructor(odataObject?: any);
    }
    class AddressClass implements Address {
        Name: string;
        FullAddress: string;
        RecordId: number;
        Street: string;
        StreetNumber: string;
        County: string;
        CountyName: string;
        City: string;
        DistrictName: string;
        State: string;
        StateName: string;
        ZipCode: string;
        ThreeLetterISORegionName: string;
        Phone: string;
        PhoneRecordId: number;
        PhoneExt: string;
        Email: string;
        EmailContent: string;
        EmailRecordId: number;
        Url: string;
        UrlRecordId: number;
        TwoLetterISORegionName: string;
        Deactivate: boolean;
        AttentionTo: string;
        BuildingCompliment: string;
        Postbox: string;
        TaxGroup: string;
        AddressTypeValue: number;
        IsPrimary: boolean;
        IsPrivate: boolean;
        PartyNumber: string;
        IsAsyncAddress: boolean;
        DirectoryPartyTableRecordId: number;
        DirectoryPartyLocationRecordId: number;
        DirectoryPartyLocationRoleRecordId: number;
        LogisticsLocationId: string;
        LogisticsLocationRecordId: number;
        LogisticsLocationExtRecordId: number;
        LogisticsLocationRoleRecordId: number;
        PhoneLogisticsLocationRecordId: number;
        PhoneLogisticsLocationId: string;
        EmailLogisticsLocationRecordId: number;
        EmailLogisticsLocationId: string;
        UrlLogisticsLocationRecordId: number;
        UrlLogisticsLocationId: string;
        ExpireRecordId: number;
        SortOrder: number;
        RoleCount: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class CustomerAffiliationClass implements CustomerAffiliation {
        RecordId: number;
        RetailAffiliationId: number;
        Name: string;
        Description: string;
        HideInChannels: boolean;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class CustomerBalancesClass implements CustomerBalances {
        Balance: number;
        PendingBalance: number;
        CreditLimit: number;
        InvoiceAccountBalance: number;
        InvoiceAccountPendingBalance: number;
        InvoiceAccountCreditLimit: number;
        constructor(odataObject?: any);
    }
    class GlobalCustomerClass implements GlobalCustomer {
        PartyNumber: string;
        RecordId: number;
        IsAsyncCustomer: boolean;
        AccountNumber: string;
        FullName: string;
        FullAddress: string;
        Phone: string;
        Email: string;
        CustomerTypeValue: number;
        Images: Entities.MediaLocation[];
        OfflineImage: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class AttributeValueClass implements AttributeValue {
        Name: string;
        UnitOfMeasureSymbol: string;
        DataTypeValue: number;
        BooleanValue: boolean;
        DateTimeOffsetValue: Date;
        FloatValue: number;
        IntegerValue: number;
        TextValue: string;
        CurrencyValue: number;
        CurrencyCode: string;
        AttributeValueId: number;
        RecordId: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class AttributeValueBaseClass implements AttributeValueBase {
        Name: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class BarcodeClass implements Barcode {
        BarcodeId: string;
        BarcodePrice: number;
        Quantity: number;
        CustomerId: string;
        EmployeeId: string;
        SalespersonId: string;
        EANLicenseId: string;
        DataEntry: string;
        DiscountCode: string;
        GiftCardNumber: string;
        LoyaltyCardNumber: string;
        ItemBarcode: Entities.ItemBarcode;
        EntryMethodTypeValue: number;
        ItemType: number;
        EnterDimensions: boolean;
        ItemGroupId: string;
        ItemDepartmentId: string;
        ScaleItem: boolean;
        ZeroPriceValid: boolean;
        NegativeQuantity: boolean;
        DiscountNotAllowed: boolean;
        DateToBeBlocked: Date;
        DateToBeActivated: Date;
        CheckDigitValidated: boolean;
        CouponId: string;
        Message: string;
        LineDiscountGroup: string;
        MultilineDiscountGroup: string;
        IncludedInTotalDiscount: boolean;
        CostPrice: number;
        BatchId: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ItemBarcodeClass implements ItemBarcode {
        RecordId: number;
        ItemId: string;
        Description: string;
        BarcodeSetupId: string;
        ItemBarcodeValue: string;
        InventoryDimensionId: string;
        IsBlocked: boolean;
        Display: boolean;
        VariantId: string;
        UnitId: string;
        UseForInput: boolean;
        UseForPrinting: boolean;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ButtonGridClass implements ButtonGrid {
        Id: string;
        Name: string;
        DefaultColor: number;
        SpaceBetweenButtonsInPixels: number;
        Buttons: Entities.ButtonGridButton[];
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class GetButtonGridsByIdsCriteriaClass implements GetButtonGridsByIdsCriteria {
        ButtonGridIds: string[];
        constructor(odataObject?: any);
    }
    class CartLineClass implements CartLine {
        LineId: string;
        TaxOverrideCode: string;
        ItemId: string;
        Barcode: string;
        EntryMethodTypeValue: number;
        Description: string;
        InventoryDimensionId: string;
        Comment: string;
        ProductId: number;
        WarehouseId: string;
        Quantity: number;
        Price: number;
        ExtendedPrice: number;
        TaxAmount: number;
        ItemTaxGroupId: string;
        TotalAmount: number;
        NetAmountWithoutTax: number;
        NetPrice: number;
        DiscountAmountWithoutTax: number;
        DiscountAmount: number;
        LineDiscount: number;
        LinePercentageDiscount: number;
        LineManualDiscountPercentage: number;
        LineManualDiscountAmount: number;
        UnitOfMeasureSymbol: string;
        ShippingAddress: Entities.Address;
        DeliveryMode: string;
        DeliveryModeChargeAmount: number;
        RequestedDeliveryDate: Date;
        ReturnTransactionId: string;
        ReturnLineNumber: number;
        ReturnInventTransId: string;
        IsVoided: boolean;
        IsTaxOverideCodeTaxExempt: boolean;
        IsGiftCardLine: boolean;
        IsPriceKeyedIn: boolean;
        GiftCardId: string;
        GiftCardCurrencyCode: string;
        GiftCardOperationValue: number;
        SalesStatusValue: number;
        QuantityOrdered: number;
        QuantityInvoiced: number;
        QuantityCanceled: number;
        FulfillmentStoreId: string;
        SerialNumber: string;
        ElectronicDeliveryEmail: string;
        ElectronicDeliveryEmailContent: string;
        IsPriceOverridden: boolean;
        OriginalPrice: number;
        IsInvoiceLine: boolean;
        InvoiceId: string;
        InvoiceAmount: number;
        GiftCardBalance: number;
        LineVersion: number;
        PromotionLines: string[];
        DiscountLines: Entities.DiscountLine[];
        RelatedDiscountedLineIds: string[];
        ReasonCodeLines: Entities.ReasonCodeLine[];
        ChargeLines: Entities.ChargeLine[];
        TaxRatePercent: number;
        IsCustomerAccountDeposit: boolean;
        LinkedParentLineId: string;
        QuantityReturnable: number;
        ExtensionProperties: Entities.CommerceProperty[];
        LineNumber: number;
        CommissionSalesGroup: string;
        TrackingId: string;
        StaffId: string;
        QuantityRemained: number;
        QuantityShipped: number;
        CatalogId: number;
        AttributeValues: Entities.AttributeValueBase[];
        ThirdPartyGiftCardInfo: Entities.ThirdPartyGiftCardInfo;
        BarcodeEmbeddedPrice: number;
        PriceInBarcode: boolean;
        InvoiceTypeValue: number;
        InvoicedSalesId: string;
        constructor(odataObject?: any);
    }
    class ThirdPartyGiftCardInfoClass implements ThirdPartyGiftCardInfo {
        Amount: number;
        Authorization: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class CardTypeInfoClass implements CardTypeInfo {
        RecordId: number;
        TypeId: string;
        Name: string;
        PaymentMethodId: string;
        CardTypeValue: number;
        Issuer: string;
        NumberFrom: string;
        NumberTo: string;
        CashBackLimit: number;
        AllowManualInput: boolean;
        CheckModulus: boolean;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class CashDeclarationClass implements CashDeclaration {
        RecordId: number;
        Currency: string;
        Amount: number;
        CashTypeValue: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class IncomeExpenseAccountClass implements IncomeExpenseAccount {
        Amount: number;
        AccountNumber: string;
        AccountName: string;
        AccountNameAlias: string;
        AccountTypeValue: number;
        Quantity: number;
        Message1Line: string;
        Message2Line: string;
        SlipText1Line: string;
        SlipText2Line: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class IncomeExpenseLineClass implements IncomeExpenseLine {
        Amount: number;
        IncomeExpenseAccount: string;
        StoreNumber: string;
        AccountTypeValue: number;
        Terminal: string;
        Shift: string;
        TransactionStatusValue: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class CartTenderLineClass implements CartTenderLine {
        PaymentCard: Entities.PaymentCard;
        TokenizedPaymentCard: Entities.TokenizedPaymentCard;
        TenderLineId: string;
        Amount: number;
        CashBackAmount: number;
        AmountInTenderedCurrency: number;
        AmountInCompanyCurrency: number;
        Currency: string;
        ExchangeRate: number;
        CompanyCurrencyExchangeRate: number;
        TenderTypeId: string;
        SignatureData: string;
        ReasonCodeLines: Entities.ReasonCodeLine[];
        LineNumber: number;
        GiftCardId: string;
        CreditMemoId: string;
        CustomerId: string;
        LoyaltyCardId: string;
        CardTypeId: string;
        IsChangeLine: boolean;
        IsHistorical: boolean;
        IsVoidable: boolean;
        StatusValue: number;
        VoidStatusValue: number;
        AuthorizedAmount: number;
        PaymentRefRecId: number;
        CardPaymentAccountId: string;
        ProcessingTypeValue: number;
        CardProcessorStatusValue: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ChargeLineClass implements ChargeLine {
        ChargeLineId: string;
        ChargeCode: string;
        CurrencyCode: string;
        ModuleTypeValue: number;
        ChargeTypeValue: number;
        ChargeMethodValue: number;
        CalculatedAmount: number;
        Value: number;
        Description: string;
        TransactionId: string;
        MarkupAutoTableRecId: number;
        SaleLineNumber: number;
        FromAmount: number;
        ToAmount: number;
        Keep: number;
        AmountRefunded: number;
        ChargeLineOverrides: Entities.ChargeLineOverride[];
        ReasonCodeLines: Entities.ReasonCodeLine[];
        IsRefundable: boolean;
        IsShipping: boolean;
        ItemId: string;
        Quantity: number;
        Price: number;
        ItemTaxGroupId: string;
        SalesTaxGroupId: string;
        OriginalSalesTaxGroupId: string;
        OriginalItemTaxGroupId: string;
        TaxAmount: number;
        SalesOrderUnitOfMeasure: string;
        NetAmount: number;
        NetAmountPerUnit: number;
        GrossAmount: number;
        TaxLines: Entities.TaxLine[];
        TaxMeasures: Entities.TaxMeasure[];
        TaxAmountExemptInclusive: number;
        TaxAmountInclusive: number;
        TaxAmountExclusive: number;
        NetAmountWithAllInclusiveTax: number;
        BeginDateTime: Date;
        EndDateTime: Date;
        TaxRatePercent: number;
        IsReturnByReceipt: boolean;
        ReturnLineTaxAmount: number;
        ReturnTaxLines: Entities.TaxLine[];
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class CityInfoClass implements CityInfo {
        Name: string;
        Description: string;
        CountryRegionId: string;
        StateId: string;
        CountyId: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class CommissionSalesGroupClass implements CommissionSalesGroup {
        GroupId: string;
        Name: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ContactInformationClass implements ContactInformation {
        Value: string;
        ContactInformationTypeValue: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class AttributeCategoryClass implements AttributeCategory {
        Value: Entities.CommercePropertyValue;
        RecordId: number;
        Name: string;
        KeyName: string;
        DataTypeValue: number;
        NameTranslations: Entities.TextValueTranslation[];
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ProductComparisonEntryClass implements ProductComparisonEntry {
        ProductId: number;
        AttributeValue: Entities.AttributeValue;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ProductComparisonLineClass implements ProductComparisonLine {
        AttributeRecordId: number;
        AttributeName: string;
        ProductAttributeComparisonEntries: Entities.ProductComparisonEntry[];
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class CustomerSearchFieldClass implements CustomerSearchField {
        IsShortcut: boolean;
        DisplayName: string;
        CanBeRefined: boolean;
        SearchField: Entities.CustomerSearchFieldType;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class CustomerSearchByFieldCriteriaClass implements CustomerSearchByFieldCriteria {
        Criteria: Entities.CustomerSearchByFieldCriterion[];
        DataLevelValue: number;
        constructor(odataObject?: any);
    }
    class CustomerSearchByFieldCriterionClass implements CustomerSearchByFieldCriterion {
        SearchTerm: string;
        SearchField: Entities.CustomerSearchFieldType;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class CustomerSearchFieldTypeClass extends ExtensibleEnumerationClass implements CustomerSearchFieldType {
        constructor(odataObject?: any);
    }
    class ShipmentClass implements Shipment {
        SalesId: string;
        ShipmentId: string;
        DeliveryAddress: Entities.Address;
        ShipDate: Date;
        DeliveryMode: string;
        TermsOfDelivery: string;
        WeightUnit: string;
        TrackingNumber: string;
        TrackingUrl: string;
        LatestCarrierTrackingInfo: Entities.TrackingInfo;
        CarrierId: string;
        CarrierName: string;
        ShippingWeight: number;
        ShipmentLines: Entities.ShipmentLine[];
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ShipmentLineClass implements ShipmentLine {
        ShipmentLineId: string;
        ItemId: string;
        Description: string;
        InventDimId: string;
        OrderedQuantity: number;
        DeliveredQuantity: number;
        RemainingQuantity: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class TransactionClass implements Transaction {
        Id: string;
        StoreId: string;
        TerminalId: string;
        IsCreatedOffline: boolean;
        StaffId: string;
        ShiftId: string;
        ShiftTerminalId: string;
        Description: string;
        ReceiptId: string;
        GrossAmount: number;
        TotalAmount: number;
        CreatedDateTime: Date;
        TransactionTypeValue: number;
        TransactionStatusValue: number;
        BeginDateTime: Date;
        GiftCardActiveFrom: Date;
        GiftCardBalance: number;
        GiftCardExpireDate: Date;
        GiftCardHistoryDetails: string;
        GiftCardIssueAmount: number;
        GiftCardIdMasked: string;
        FromSafe: string;
        ToSafe: string;
        FromShiftTerminalId: string;
        ToShiftTerminalId: string;
        FromShiftId: string;
        TransactionSourceContextTypeValue: number;
        TransactionDestinationContextTypeValue: number;
        ToShiftId: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ShiftReconciliationLineClass extends TransactionClass implements ShiftReconciliationLine {
        GroupId: number;
        GroupDescription: string;
        ShiftGroupLinesCount: number;
        ShiftGroupLinesClosedCount: number;
        constructor(odataObject?: any);
    }
    class ShiftReconciliationLineRetrievalCriteriaClass implements ShiftReconciliationLineRetrievalCriteria {
        TransactionTypeValues: number[];
        ShiftReconciliationLineStatusValue: number;
        Shifts: Entities.ShiftKey[];
        DestinationShift: Entities.ShiftKey;
        SourceSafe: string;
        DestinationSafe: string;
        TransactionSourceContextTypeValue: number;
        TransactionDestinationContextTypeValue: number;
        constructor(odataObject?: any);
    }
    class AttributeDefinitionClass implements AttributeDefinition {
        RecordId: number;
        Name: string;
        AttributeTypeName: string;
        DataType: string;
        DataTypeValue: number;
        IsHidden: boolean;
        IsMandatory: boolean;
        IsMultiValue: boolean;
        IsEnumeration: boolean;
        TranslationDetails: Entities.AttributeTranslationDetails[];
        EnumerationDetails: Entities.AttributeEnumeration[];
        DefaultValue: Entities.CommercePropertyValue;
        UpperBound: Entities.CommercePropertyValue;
        LowerBound: Entities.CommercePropertyValue;
        DisplayOrder: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class AttributeTranslationDetailsClass implements AttributeTranslationDetails {
        AttributeRecordId: number;
        LanguageId: string;
        FriendlyName: string;
        Description: string;
        HelpText: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class AttributeEnumerationClass implements AttributeEnumeration {
        OrdinalNumber: number;
        EnumerationValue: string;
        AttributeEnumerationTranslations: Entities.AttributeEnumerationTranslation[];
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class AttributeEnumerationTranslationClass implements AttributeEnumerationTranslation {
        LanguageId: string;
        EnumerationTranslationValue: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class AttributeDefinitionCriteriaClass implements AttributeDefinitionCriteria {
        AttributeGroupIdentifier: number;
        Languages: string[];
        constructor(odataObject?: any);
    }
    class AttributeGroupDefinitionClass implements AttributeGroupDefinition {
        RecordId: number;
        Name: string;
        TranslationDetails: Entities.AttributeGroupTranslationDetails[];
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class AttributeGroupTranslationDetailsClass implements AttributeGroupTranslationDetails {
        AttributeGroupRecordId: number;
        LanguageId: string;
        FriendlyName: string;
        Description: string;
        HelpText: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class AttributeGroupDefinitionCriteriaClass implements AttributeGroupDefinitionCriteria {
        AttributeGroupIdentifiers: number[];
        Languages: string[];
        constructor(odataObject?: any);
    }
    class CountyInfoClass implements CountyInfo {
        Name: string;
        CountyId: string;
        CountryRegionId: string;
        StateId: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class CustomerGroupClass implements CustomerGroup {
        CustomerGroupNumber: string;
        CustomerGroupName: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class DiscountLineClass implements DiscountLine {
        SaleLineNumber: number;
        OfferId: string;
        OfferName: string;
        Amount: number;
        DiscountCost: number;
        EffectiveAmount: number;
        SavedEffectiveAmount: number;
        Percentage: number;
        DealPrice: number;
        DiscountLineTypeValue: number;
        ManualDiscountTypeValue: number;
        CustomerDiscountTypeValue: number;
        PeriodicDiscountTypeValue: number;
        DiscountApplicationGroup: string;
        ConcurrencyModeValue: number;
        IsCompoundable: boolean;
        DiscountCode: string;
        PricingPriorityNumber: number;
        IsDiscountCodeRequired: boolean;
        ThresholdAmountRequired: number;
        BundleId: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class EmployeePermissionsClass implements EmployeePermissions {
        PriceOverrideRestrictionValue: number;
        AllowPriceOverride: number;
        MaximumDiscountPercentage: number;
        MaximumLineDiscountAmount: number;
        MaximumLineReturnAmount: number;
        MaximumTotalDiscountAmount: number;
        MaximumTotalDiscountPercentage: number;
        MaxTotalReturnAmount: number;
        StaffId: string;
        Roles: string[];
        AllowUseSharedShift: boolean;
        AllowManageSharedShift: boolean;
        AllowTaskGuides: boolean;
        AllowSaleOutsideAssortment: boolean;
        AllowPrintingReceiptCopy: string;
        AllowSkipFiscalRegistration: boolean;
        AllowSkipRegistrationOrMarkAsRegistered: boolean;
        AllowCreateTransferOrder: boolean;
        AllowAcceptOrder: boolean;
        AllowRejectOrder: boolean;
        AllowMassActivation: boolean;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class CommercePropertyClass implements CommerceProperty {
        Key: string;
        Value: Entities.CommercePropertyValue;
        constructor(odataObject?: any);
    }
    class CommercePropertyValueClass implements CommercePropertyValue {
        BooleanValue: boolean;
        ByteValue: number;
        DateTimeOffsetValue: Date;
        DecimalValue: number;
        IntegerValue: number;
        LongValue: number;
        StringValue: string;
        constructor(odataObject?: any);
    }
    class CountryRegionInfoClass implements CountryRegionInfo {
        CountryRegionId: string;
        ShortName: string;
        LongName: string;
        ISOCode: string;
        TimeZone: number;
        LanguageId: string;
        AddressFormatLines: Entities.AddressFormattingInfo[];
        AddressFormatId: string;
        AddressFormatName: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class CreditMemoClass implements CreditMemo {
        Id: string;
        Balance: number;
        CurrencyCode: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class CurrencyClass implements Currency {
        CurrencyCode: string;
        CurrencySymbol: string;
        RoundOffPrice: number;
        RoundOffSales: number;
        RoundOffTypePrice: number;
        RoundOffTypeSales: number;
        NumberOfDecimals: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class CurrencyAmountClass implements CurrencyAmount {
        CurrencyCode: string;
        CurrencySymbol: string;
        ConvertedAmount: number;
        RoundedConvertedAmount: number;
        ExchangeRate: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class EnvironmentConfigurationClass implements EnvironmentConfiguration {
        EnvironmentId: string;
        EnvironmentName: string;
        TenantId: string;
        ClientAppInsightsInstrumentationKey: string;
        HardwareStationAppInsightsInstrumentationKey: string;
        WindowsPhonePosAppInsightsInstrumentationKey: string;
        BaseVersion: string;
        ScaleUnit: Entities.ScaleUnitConfiguration;
        constructor(odataObject?: any);
    }
    class DeviceConfigurationClass implements DeviceConfiguration {
        UseInMemoryDeviceDataStorage: boolean;
        AllowItemsAggregation: boolean;
        AggregateItemsForPrinting: boolean;
        AggregatePayments: boolean;
        AlwaysExpandTransactionScreenLineDetails: boolean;
        AuditEnabled: boolean;
        DiscountAtTotal: string;
        ProductDiscount: string;
        ManuallyCalculateComplexDiscounts: boolean;
        DisplaySecondaryTotalCurrency: boolean;
        EndOfTransaction: string;
        ItemNotOnFile: string;
        LimitStaffListToStore: boolean;
        LineItemTaxChange: string;
        MarkUp: string;
        MaximumPrice: number;
        MaximumQuantity: number;
        MinimumPasswordLength: number;
        MustKeyInPriceIfZero: boolean;
        NfcEContingencyModeEnabled: string;
        NfcEVoided: string;
        FunctionalityProfileDescription: string;
        OverridePrice: string;
        PrintVoidTransactionReceipts: boolean;
        PrintXZReportsOnTerminal: boolean;
        PrintTenderDetailsOnXReport: boolean;
        ProfileId: string;
        RefundSale: string;
        ReturnProduct: string;
        SalesPerson: string;
        SecondaryTotalCurrency: string;
        SelectHardwareStationOnTendering: boolean;
        SerialNumber: string;
        ShowStaffListAtLogOn: boolean;
        StaffBarcodeLogOn: boolean;
        StaffBarcodeLogOnRequiresPassword: boolean;
        StaffCardLogOn: boolean;
        StaffCardLogOnRequiresPassword: boolean;
        StartOfTransaction: string;
        EnableTimeRegistration: boolean;
        TenderDeclaration: string;
        TransactionTaxChange: string;
        VoidItem: string;
        VoidPayment: string;
        SalesModeDefaultsAsCustomerOrder: boolean;
        CreateOfflineCustomerOrders: boolean;
        CreateAsyncCustomers: boolean;
        EnableAxCustomerSearch: boolean;
        VoidTransaction: string;
        CultureName: string;
        SystemLegalTermsUrl: string;
        SystemPrivacyStatementUrl: string;
        HideTrainingMode: boolean;
        StorePhone: string;
        StatementMethod: string;
        StoreNumber: string;
        ChannelId: number;
        StoreTaxGroup: string;
        TaxIdNumber: string;
        TaxOverrideGroup: number;
        TenderDeclarationCalculation: number;
        UseCustomerBasedTax: boolean;
        UseDestinationBasedTax: boolean;
        AutoLogOffTimeoutInMinutes: number;
        AutoExitMethodValue: number;
        CustomerDisplayText1: string;
        CustomerDisplayText2: string;
        EFTStoreId: number;
        EFTTerminalId: string;
        ExitAfterEachTransaction: boolean;
        HardwareProfile: string;
        Placement: string;
        TerminalDescription: string;
        OpenDrawer: string;
        OpenDrawerAtLogOnLogOff: boolean;
        PrintTaxRefundChecks: boolean;
        StandAlone: boolean;
        TerminalId: string;
        TerminalStatement: boolean;
        VisualProfile: string;
        Currency: string;
        InventLocationId: string;
        IncludeKitComponents: boolean;
        AccentColor: number;
        HeaderColor: number;
        Theme: string;
        FontScheme: number;
        ShowAppBarLabel: boolean;
        LogOnBackgroundPictureAsBase64: string;
        LogOnBackgroundPicturePortraitAsBase64: string;
        BackgroundPictureAsBase64: string;
        LogonBackgroundPictureId: number;
        LogonBackgroundPictureIdCompact: number;
        LogonBackgroundPictureIdPortrait: number;
        LogonBackgroundPictureIdCompactPortrait: number;
        BackgroundPictureId: number;
        RequireAmountDeclaration: boolean;
        DecimalNotRequiredForMinorCurrencyUnit: boolean;
        MaxTransactionSearchResults: number;
        OfflineProfileId: number;
        NewOfflineDatabaseCheckInterval: number;
        OfflineTransactionUploadInterval: number;
        ReconnectToOnlineInterval: number;
        SwitchToOfflineTimeout: number;
        RetentionDays: number;
        HardwareConfigurations: Entities.HardwareConfigurations;
        CreateRecording: boolean;
        PlaybackRecording: boolean;
        ShouldUseDefaultCommisionSalesGroup: boolean;
        AskForSalesRepresentative: number;
        IsSalesRepRequired: boolean;
        ProhibitMixingSalesAndReturns: boolean;
        ApplyDiscountsToPriceKeyedIn: boolean;
        ApplyDiscountsToPriceOverrides: boolean;
        IsProductSuggestionsEnabled: boolean;
        ProductSearchType: string;
        DenominationsToDisplayValue: number;
        PromptOnSeamlessOffline: boolean;
        RetryCountToOffline: number;
        RejectOrderFulfillment: string;
        ManuallyCalculateTaxes: boolean;
        EmployeeLogonTypeValue: number;
        StartAmountCalculation: number;
        BankDropCalculation: number;
        GenerateLoyaltyCardNumber: boolean;
        FiscalRegistrationProcessId: string;
        IncludeSalesOrderInvoices: boolean;
        IncludeFreeTextInvoices: boolean;
        IncludeProjectInvoices: boolean;
        IncludeCreditNoteInvoices: boolean;
        DisplayTaxExemptInLineDetails: boolean;
        TaxExemptReceiptIndicator: string;
        ManuallyCalculateCharges: boolean;
        ChargeOverrideReasonCode: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class DeviceClass implements Device {
        ChannelId: number;
        RecordId: number;
        DeviceNumber: string;
        DeviceId: string;
        Description: string;
        DeviceType: number;
        TerminalRecordId: number;
        TerminalId: string;
        ChannelName: string;
        UseInMemoryDeviceDataStorage: boolean;
        AllowMassActivation: boolean;
        TokenIssueTime: Date;
        ActivationStatusValue: number;
        Token: string;
        CountryRegionIsoCode: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class DiscountCodeClass implements DiscountCode {
        RecordId: number;
        Barcode: string;
        Code: string;
        ConcurrencyMode: number;
        Description: string;
        Disclaimer: string;
        IsDiscountCodeRequired: boolean;
        Name: string;
        OfferId: string;
        IsEnabled: boolean;
        ValidFrom: Date;
        ValidTo: Date;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class DistrictInfoClass implements DistrictInfo {
        Name: string;
        Description: string;
        CountryRegionId: string;
        StateId: string;
        CountyId: string;
        CityName: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class HardwareProfileClass implements HardwareProfile {
        LineDisplayDelayForLinkedItems: number;
        LineDisplayBalanceText: string;
        LineDisplayBinaryConversion: boolean;
        LineDisplayCharacterSet: number;
        LineDisplayClosedLine1: string;
        LineDisplayClosedLine2: string;
        LineDisplayDeviceDescription: string;
        LineDisplayDeviceTypeValue: number;
        LineDisplayDeviceName: string;
        LineDisplayDisplayLinkedItem: boolean;
        LineDisplayDisplayTerminalClosed: boolean;
        LineDisplayTotalText: string;
        DualDisplayActive: boolean;
        DualDisplayWebBrowserUrl: string;
        DualDisplayImageRotatorInterval: number;
        DualDisplayImageRotatorPath: string;
        DualDisplayReceiptWidthPercentage: number;
        DualDisplayDisplayType: string;
        EftTypeId: number;
        EftCompanyId: string;
        EftConfiguration: number;
        EftPaymentConnectorName: string;
        EftData: string;
        EftDescription: string;
        EftMerchantId: string;
        EftPassword: string;
        EftServerName: string;
        EftServerPort: string;
        EftUserId: string;
        EftTestMode: boolean;
        MsrEndTrack1: string;
        MsrEndTrack2: string;
        FiscalPrinterManagementReportPAFIdentification: string;
        FiscalPrinterManagementReportConfigParameter: string;
        FiscalPrinterManagementReportTenderType: string;
        FiscalPrinterManagementReportGiftCard: string;
        FiscalRegisterDeviceTypeValue: number;
        FiscalRegisterConfiguration: string;
        FiscalRegisterDeviceDescription: string;
        FiscalRegisterDeviceName: string;
        KeyboardMappingId: string;
        KeyLockDeviceTypeValue: number;
        KeyLockDeviceDescription: string;
        KeyLockDeviceName: string;
        MsrDeviceTypeValue: number;
        MsrDeviceDescription: string;
        MsrDeviceName: string;
        MsrMake: string;
        MsrModel: string;
        MsrSeparator: string;
        MsrStartTrack: string;
        PinPadDeviceTypeValue: number;
        PinPadDeviceName: string;
        PinPadMake: string;
        PinPadModel: string;
        PinPadDeviceDescription: string;
        ProfileDescription: string;
        ProfileId: string;
        RFIDDeviceTypeValue: number;
        RFIDDeviceName: string;
        RFIDDeviceDescription: string;
        ScaleDeviceTypeValue: number;
        ScaleDeviceName: string;
        ScaleDeviceDescription: string;
        ScaleManualInputAllowed: boolean;
        ScaleTimeoutInSeconds: number;
        SignatureCaptureDeviceTypeValue: number;
        SignatureCaptureDeviceName: string;
        SignatureCaptureMake: string;
        SignatureCaptureModel: string;
        SignatureCaptureDeviceDescription: string;
        SignatureCaptureFormName: string;
        Printers: Entities.HardwareProfilePrinter[];
        Scanners: Entities.HardwareProfileScanner[];
        FiscalIntegrationTechnicalProfiles: Entities.FiscalIntegrationTechnicalProfile[];
        CashDrawers: Entities.HardwareProfileCashDrawer[];
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class SupportedLanguageClass implements SupportedLanguage {
        LanguageId: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class PaymentCardClass implements PaymentCard {
        UseShippingAddress: boolean;
        CardNumber: string;
        CCID: string;
        Track1: string;
        Track2: string;
        Track3: string;
        VoiceAuthorizationCode: string;
        EncryptedPin: string;
        AdditionalSecurityData: string;
        IsSwipe: boolean;
        Phone: string;
        Country: string;
        House: string;
        Address1: string;
        Address2: string;
        City: string;
        State: string;
        Zip: string;
        NameOnCard: string;
        CardTypeId: string;
        ExpirationMonth: number;
        ExpirationYear: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class CardPaymentAcceptSettingsClass implements CardPaymentAcceptSettings {
        HostPageOrigin: string;
        AdaptorPath: string;
        CardTokenizationEnabled: boolean;
        CardPaymentEnabled: boolean;
        PaymentAmount: number;
        constructor(odataObject?: any);
    }
    class CardPaymentAcceptPointClass implements CardPaymentAcceptPoint {
        AcceptPageUrl: string;
        AcceptPageSubmitUrl: string;
        MessageOrigin: string;
        AcceptPageContent: string;
        constructor(odataObject?: any);
    }
    class CardPaymentAcceptResultClass implements CardPaymentAcceptResult {
        TenderLine: Entities.TenderLine;
        TokenizedPaymentCard: Entities.TokenizedPaymentCard;
        PaymentSdkErrors: Entities.PaymentError[];
        constructor(odataObject?: any);
    }
    class ReasonCodeLineClass implements ReasonCodeLine {
        LineId: string;
        Amount: number;
        Information: string;
        InformationAmount: number;
        InputTypeValue: number;
        ItemTender: string;
        LineNumber: number;
        LineTypeValue: number;
        ParentLineId: string;
        ReasonCodeId: string;
        StatementCode: string;
        SubReasonCodeId: string;
        SourceCode: string;
        SourceCode2: string;
        SourceCode3: string;
        TransactionId: string;
        CreatedDateTime: Date;
        FiscalTransactionParentGuid: string;
        IsChanged: boolean;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ReasonSubCodeClass implements ReasonSubCode {
        TriggerCode: string;
        AmountPercent: number;
        ReasonCodeId: string;
        SubCodeId: string;
        Description: string;
        TriggerFunctionTypeValue: number;
        ProductId: number;
        PriceTypeValue: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ReceiptClass implements Receipt {
        TransactionId: string;
        Header: string;
        Body: string;
        Footer: string;
        Width: number;
        ReceiptId: string;
        LayoutId: string;
        ReceiptTitle: string;
        ReceiptTypeValue: number;
        ReceiptTypeStrValue: string;
        Printers: Entities.Printer[];
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ReceiptMaskClass implements ReceiptMask {
        FunctionalityProfileId: string;
        IsIndependent: boolean;
        ReceiptTransactionTypeValue: number;
        RecordId: number;
        Mask: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class SalesLineClass implements SalesLine {
        StaffId: string;
        LineId: string;
        Description: string;
        OriginLineId: string;
        TaxOverrideCode: string;
        IsPriceKeyedIn: boolean;
        IsTaxOverideCodeTaxExempt: boolean;
        ProductId: number;
        Barcode: string;
        BarcodeEmbeddedPrice: number;
        PriceInBarcode: boolean;
        EntryMethodTypeValue: number;
        MasterProductId: number;
        ListingId: number;
        IsPriceOverridden: boolean;
        OriginalPrice: number;
        TotalAmount: number;
        NetAmountWithoutTax: number;
        DiscountAmount: number;
        DiscountAmountWithoutTax: number;
        NetPrice: number;
        TotalDiscount: number;
        TotalPercentageDiscount: number;
        LineDiscount: number;
        PeriodicDiscount: number;
        LineManualDiscountPercentage: number;
        LineManualDiscountAmount: number;
        ShippingAddress: Entities.Address;
        DeliveryMode: string;
        Comment: string;
        RequestedDeliveryDate: Date;
        InventoryLocationId: string;
        WarehouseLocation: string;
        InventoryStatusId: string;
        LicensePlate: string;
        InventoryDimensionId: string;
        ItemType: number;
        ReservationId: string;
        LineNumber: number;
        ReturnQuantity: number;
        QuantityRemained: number;
        QuantityShipped: number;
        LineVersion: number;
        StatusValue: number;
        SalesStatusValue: number;
        ProductSourceValue: number;
        IsGiftCardLine: boolean;
        GiftCardId: string;
        GiftCardCurrencyCode: string;
        GiftCardOperationValue: number;
        IsInvoiceLine: boolean;
        InvoiceId: string;
        InvoiceAmount: number;
        IsInvoiceSettled: boolean;
        InvoiceTypeValue: number;
        InvoicedSalesId: string;
        IsVoided: boolean;
        IsPriceLocked: boolean;
        ChargeLines: Entities.ChargeLine[];
        BasePrice: number;
        AgreementPrice: number;
        AdjustedPrice: number;
        ReturnTransactionId: string;
        ReturnLineNumber: number;
        ReturnInventTransId: string;
        ReturnStore: string;
        ReturnTerminalId: string;
        ReturnChannelId: number;
        FulfillmentStoreId: string;
        SalesDate: Date;
        QuantityInvoiced: number;
        QuantityOrdered: number;
        QuantityCanceled: number;
        SavedQuantity: number;
        IsSavedDiscount: boolean;
        RecordId: number;
        SerialNumber: string;
        BatchId: string;
        DeliveryModeChargeAmount: number;
        UnitOfMeasureSymbol: string;
        CatalogId: number;
        ElectronicDeliveryEmailAddress: string;
        ElectronicDeliveryEmailContent: string;
        LoyaltyDiscountAmount: number;
        LoyaltyPercentageDiscount: number;
        GiftCardBalance: number;
        IsCustomerAccountDeposit: boolean;
        Blocked: boolean;
        Found: boolean;
        DateToActivateItem: Date;
        LinePercentageDiscount: number;
        PeriodicPercentageDiscount: number;
        QuantityDiscounted: number;
        UnitQuantity: number;
        UnitOfMeasureConversion: Entities.UnitOfMeasureConversion;
        DiscountLines: Entities.DiscountLine[];
        PriceLines: Entities.PriceLine[];
        PeriodicDiscountPossibilities: Entities.DiscountLine[];
        ReasonCodeLines: Entities.ReasonCodeLine[];
        ReturnLabelProperties: Entities.ReturnLabelContent;
        LineMultilineDiscOnItem: string;
        RelatedDiscountedLineIds: string[];
        LinkedParentLineId: string;
        LineMultilineDiscOnItemValue: number;
        WasChanged: boolean;
        OriginalSalesOrderUnitOfMeasure: string;
        InventOrderUnitOfMeasure: string;
        TrackingId: string;
        IsLoyaltyDiscountApplied: boolean;
        CommissionSalesGroup: string;
        AttributeValues: Entities.AttributeValueBase[];
        ThirdPartyGiftCardInfo: Entities.ThirdPartyGiftCardInfo;
        QuantityReturnable: number;
        LoyaltyRewardPointLines: Entities.LoyaltyRewardPointLine[];
        ReturnLoyaltyRewardPointLines: Entities.LoyaltyRewardPointLine[];
        ItemId: string;
        Quantity: number;
        Price: number;
        ItemTaxGroupId: string;
        SalesTaxGroupId: string;
        OriginalSalesTaxGroupId: string;
        OriginalItemTaxGroupId: string;
        TaxAmount: number;
        SalesOrderUnitOfMeasure: string;
        NetAmount: number;
        NetAmountPerUnit: number;
        GrossAmount: number;
        TaxLines: Entities.TaxLine[];
        TaxMeasures: Entities.TaxMeasure[];
        TaxAmountExemptInclusive: number;
        TaxAmountInclusive: number;
        TaxAmountExclusive: number;
        NetAmountWithAllInclusiveTax: number;
        BeginDateTime: Date;
        EndDateTime: Date;
        TaxRatePercent: number;
        IsReturnByReceipt: boolean;
        ReturnLineTaxAmount: number;
        ReturnTaxLines: Entities.TaxLine[];
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class SearchAreaClass implements SearchArea {
        Longitude: number;
        Latitude: number;
        Radius: number;
        DistanceUnitValue: number;
        constructor(odataObject?: any);
    }
    class ShiftAccountLineClass implements ShiftAccountLine {
        AccountTypeValue: number;
        AccountNumber: string;
        Amount: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ShiftTenderLineClass implements ShiftTenderLine {
        TenderTypeId: string;
        TenderTypeName: string;
        CardTypeId: string;
        TenderCurrency: string;
        CountingRequired: boolean;
        StartingAmountOfStoreCurrency: number;
        StartingAmountOfTenderCurrency: number;
        FloatingEntryAmountOfStoreCurrency: number;
        FloatingEntryAmountOfTenderCurrency: number;
        SafeDropAmountOfStoreCurrency: number;
        SafeDropAmountOfTenderCurrency: number;
        BankDropAmountOfStoreCurrency: number;
        BankDropAmountOfTenderCurrency: number;
        RemoveTenderAmountOfStoreCurrency: number;
        RemoveTenderAmountOfTenderCurrency: number;
        DeclareTenderAmountOfStoreCurrency: number;
        DeclareTenderAmountOfTenderCurrency: number;
        TenderedAmountOfStoreCurrency: number;
        TenderedAmountOfTenderCurrency: number;
        ChangeAmountOfStoreCurrency: number;
        ChangeAmountOfTenderCurrency: number;
        Count: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class StockCountJournalTransactionClass implements StockCountJournalTransaction {
        JournalId: string;
        RecordId: number;
        OperationType: number;
        ItemId: string;
        DataAreaId: string;
        ProductRecordId: number;
        ItemName: string;
        InventDimId: string;
        Counted: number;
        Quantity: number;
        Unit: string;
        UserId: string;
        TerminalId: string;
        CountedDate: Date;
        Status: number;
        InventBatchId: string;
        WarehouseLocationId: string;
        InventoryStatus: string;
        LicensePlate: string;
        WarehousePalletId: string;
        InventSiteId: string;
        InventLocationId: string;
        ConfigId: string;
        InventSizeId: string;
        InventColorId: string;
        InventStyleId: string;
        InventSerialId: string;
        TrackingGuid: string;
        UpdatedInAx: boolean;
        Message: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class TaxLineClass implements TaxLine {
        TaxGroup: string;
        Percentage: number;
        IsExempt: boolean;
        TaxBasis: number;
        IsIncludedInPrice: boolean;
        SaleLineNumber: number;
        StoreId: string;
        TerminalId: string;
        TransactionId: string;
        TaxCode: string;
        Amount: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class TenderLineClass implements TenderLine {
        CardToken: string;
        Authorization: string;
        TransactionStatusValue: number;
        IncomeExpenseAccountTypeValue: number;
        MaskedCardNumber: string;
        TenderDate: Date;
        IsPreProcessed: boolean;
        IsDeposit: boolean;
        TenderLineId: string;
        Amount: number;
        CashBackAmount: number;
        AmountInTenderedCurrency: number;
        AmountInCompanyCurrency: number;
        Currency: string;
        ExchangeRate: number;
        CompanyCurrencyExchangeRate: number;
        TenderTypeId: string;
        SignatureData: string;
        ReasonCodeLines: Entities.ReasonCodeLine[];
        LineNumber: number;
        GiftCardId: string;
        CreditMemoId: string;
        CustomerId: string;
        LoyaltyCardId: string;
        CardTypeId: string;
        IsChangeLine: boolean;
        IsHistorical: boolean;
        IsVoidable: boolean;
        StatusValue: number;
        VoidStatusValue: number;
        AuthorizedAmount: number;
        PaymentRefRecId: number;
        CardPaymentAccountId: string;
        ProcessingTypeValue: number;
        CardProcessorStatusValue: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class TextValueTranslationClass implements TextValueTranslation {
        Language: string;
        Text: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class UnitOfMeasureClass implements UnitOfMeasure {
        DecimalPrecision: number;
        Symbol: string;
        Description: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class CommerceListLineClass implements CommerceListLine {
        CommerceListId: number;
        LineId: number;
        CustomerId: string;
        CustomerName: string;
        ProductId: number;
        Quantity: number;
        UnitOfMeasure: string;
        IsFavorite: boolean;
        IsRecurring: boolean;
        IsPrivate: boolean;
        CreatedDateTime: Date;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class CommerceListContributorClass implements CommerceListContributor {
        RecordId: number;
        CustomerId: string;
        CustomerName: string;
        InvitationId: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class CommerceListInvitationClass implements CommerceListInvitation {
        RecordId: number;
        Invitee: string;
        IsSent: boolean;
        LastRequestDateTime: Date;
        LastSentDateTime: Date;
        StatusValue: number;
        Token: string;
        InvitationTypeValue: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class SearchFilterClass implements SearchFilter {
        Key: string;
        FilterTypeValue: number;
        SearchValues: Entities.SearchFilterValue[];
        constructor(odataObject?: any);
    }
    class SearchFilterValueClass implements SearchFilterValue {
        Value: Entities.CommercePropertyValue;
        constructor(odataObject?: any);
    }
    class TransactionSearchCriteriaClass implements TransactionSearchCriteria {
        TransactionIds: string[];
        SalesId: string;
        ReceiptId: string;
        ChannelReferenceId: string;
        CustomerAccountNumber: string;
        CustomerFirstName: string;
        CustomerLastName: string;
        StoreId: string;
        TerminalId: string;
        ItemId: string;
        Barcode: string;
        SerialNumber: string;
        StaffId: string;
        StartDateTime: Date;
        EndDateTime: Date;
        ReceiptEmailAddress: string;
        SearchIdentifiers: string;
        SearchLocationTypeValue: number;
        CustomFilters: Entities.SearchFilter[];
        constructor(odataObject?: any);
    }
    class SalesOrderSearchCriteriaClass implements SalesOrderSearchCriteria {
        TransactionIds: string[];
        SalesId: string;
        ReceiptId: string;
        ChannelReferenceId: string;
        CustomerAccountNumber: string;
        CustomerFirstName: string;
        CustomerLastName: string;
        StoreId: string;
        TerminalId: string;
        ItemId: string;
        Barcode: string;
        SerialNumber: string;
        StaffId: string;
        SearchTypeValue: number;
        StartDateTime: Date;
        EndDateTime: Date;
        IncludeDetails: boolean;
        ReceiptEmailAddress: string;
        SearchIdentifiers: string;
        SalesTransactionTypeValues: number[];
        SearchLocationTypeValue: number;
        TransactionStatusTypeValues: number[];
        constructor(odataObject?: any);
    }
    class SearchStoreCriteriaClass implements SearchStoreCriteria {
        ChannelId: number;
        StoreNumber: string;
        InventoryLocationId: string;
        constructor(odataObject?: any);
    }
    class CustomerSearchCriteriaClass implements CustomerSearchCriteria {
        Keyword: string;
        SearchOnlyCurrentCompany: boolean;
        SearchLocationValue: number;
        DataLevelValue: number;
        constructor(odataObject?: any);
    }
    class ProductPriceClass implements ProductPrice {
        ProductId: number;
        ListingId: number;
        BasePrice: number;
        TradeAgreementPrice: number;
        AdjustedPrice: number;
        CustomerContextualPrice: number;
        DiscountAmount: number;
        CurrencyCode: string;
        ItemId: string;
        InventoryDimensionId: string;
        UnitOfMeasure: string;
        ValidFrom: Date;
        ProductLookupId: number;
        ChannelId: number;
        CatalogId: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class OrgUnitAvailabilityClass implements OrgUnitAvailability {
        OrgUnitLocation: Entities.OrgUnitLocation;
        ItemAvailabilities: Entities.ItemAvailability[];
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ProductVariantPropertySetClass implements ProductVariantPropertySet {
        VariantId: number;
        ProductVariantPropertiesAsList: Entities.ProductPropertyTranslation[];
        constructor(odataObject?: any);
    }
    class PurchaseOrderLineClass implements PurchaseOrderLine {
        RecordId: number;
        OrderId: string;
        ProductRecordId: number;
        ItemId: string;
        ItemName: string;
        InventDimId: string;
        QuantityOrdered: number;
        PurchaseQuantity: number;
        PurchaseUnit: string;
        PurchaseReceived: number;
        PurchaseReceivedNow: number;
        InventBatchId: string;
        WMSLocationId: string;
        WMSPalletId: string;
        InventoryStatus: string;
        LicensePlate: string;
        InventSiteId: string;
        InventLocationId: string;
        ConfigId: string;
        InventSerialId: string;
        InventSizeId: string;
        InventColorId: string;
        InventStyleId: string;
        IsCommitted: boolean;
        Message: string;
        UniqueIdentifier: string;
        DeliveryMethod: string;
        DataAreaId: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class TransferOrderLineClass implements TransferOrderLine {
        RecordId: number;
        OrderId: string;
        ProductRecordId: number;
        ItemId: string;
        ItemName: string;
        InventDimId: string;
        QuantityTransferred: number;
        QuantityShipped: number;
        QuantityReceived: number;
        QuantityShipNow: number;
        QuantityReceiveNow: number;
        QuantityRemainShip: number;
        QuantityRemainReceive: number;
        PurchaseUnit: string;
        InventBatchId: string;
        WMSLocationId: string;
        WMSPalletId: string;
        InventoryStatus: string;
        LicensePlate: string;
        InventSiteId: string;
        InventLocationId: string;
        ConfigId: string;
        InventSerialId: string;
        InventSizeId: string;
        InventColorId: string;
        InventStyleId: string;
        IsCommitted: boolean;
        Message: string;
        Guid: string;
        DeliveryMethod: string;
        DataAreaId: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class TransferOrderJournalClass implements TransferOrderJournal {
        OrderId: string;
        VoucherId: string;
        UpdatedByWorker: string;
        InventLocationIdFrom: string;
        InventLocationIdTo: string;
        QuantityShipped: number;
        PostingDate: Date;
        DeliveryMode: string;
        Comments: string;
        JournalLines: Entities.TransferOrderJournalLine[];
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class PickingListLineClass implements PickingListLine {
        RecordId: number;
        OrderId: string;
        ProductRecordId: number;
        ItemId: string;
        ItemName: string;
        InventDimId: string;
        QuantityOrdered: number;
        PurchaseReceivedNow: number;
        InventBatchId: string;
        WMSLocationId: string;
        WMSPalletId: string;
        InventoryStatus: string;
        LicensePlate: string;
        InventSiteId: string;
        InventLocationId: string;
        ConfigId: string;
        InventSerialId: string;
        InventSizeId: string;
        InventColorId: string;
        InventStyleId: string;
        IsCommitted: boolean;
        Message: string;
        Guid: string;
        DeliveryMethod: string;
        DataAreaId: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class AffiliationClass implements Affiliation {
        RecordId: number;
        AffiliationTypeValue: number;
        Description: string;
        Name: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ProductDimensionClass implements ProductDimension {
        DimensionTypeValue: number;
        DimensionValue: Entities.ProductDimensionValue;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ProductDimensionValueClass implements ProductDimensionValue {
        RecordId: number;
        Value: string;
        DimensionId: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ProductDimensionCombinationClass implements ProductDimensionCombination {
        ProductDimensions: Entities.ProductDimension[];
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ProductRefinerClass implements ProductRefiner {
        RecordId: number;
        KeyName: string;
        SourceValue: number;
        DataTypeValue: number;
        RefinerTypeValue: number;
        DisplayTemplateValue: number;
        Values: Entities.ProductRefinerValue[];
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ProductRefinerValueClass implements ProductRefinerValue {
        RefinerRecordId: number;
        RefinerSourceValue: number;
        DataTypeValue: number;
        LeftValueBoundString: string;
        RightValueBoundString: string;
        UnitText: string;
        RowNumber: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ProductRelationTypeClass implements ProductRelationType {
        Name: string;
        RecordId: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ComponentInSlotRelationClass implements ComponentInSlotRelation {
        ComponentId: number;
        SlotId: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ProductRulesClass implements ProductRules {
        HasLinkedProducts: boolean;
        IsSerialized: boolean;
        IsActiveInSalesProcess: boolean;
        IsBlocked: boolean;
        DateOfBlocking: Date;
        DateToActivate: Date;
        DateToBlock: Date;
        DefaultUnitOfMeasure: string;
        PriceKeyingRequirementValue: number;
        QuantityKeyingRequirementValue: number;
        MustKeyInComment: boolean;
        CanQuantityBecomeNegative: boolean;
        MustScaleItem: boolean;
        CanPriceBeZero: boolean;
        ProductId: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class LocalizedStringClass implements LocalizedString {
        RecordId: number;
        LanguageId: string;
        TextId: number;
        Text: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class LoyaltyCardClass implements LoyaltyCard {
        CardNumber: string;
        CardTenderTypeValue: number;
        CustomerAccount: string;
        LoyaltyGroups: Entities.LoyaltyGroup[];
        RewardPoints: Entities.LoyaltyRewardPoint[];
        LoyaltyEnrollmentDate: Date;
        OmOperatingUnitId: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ProductComponentClass implements ProductComponent {
        ProductId: number;
        SlotId: number;
        Product: Entities.SimpleProduct;
        AdditionalChargeForComponent: number;
        Behavior: Entities.ProductBehavior;
        Description: string;
        Dimensions: Entities.ProductDimension[];
        ItemId: string;
        Name: string;
        ProductTypeValue: number;
        Quantity: number;
        UnitOfMeasure: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class SimpleProductClass implements SimpleProduct {
        RecordId: number;
        ItemId: string;
        Name: string;
        Description: string;
        ProductTypeValue: number;
        DefaultUnitOfMeasure: string;
        BasePrice: number;
        Price: number;
        AdjustedPrice: number;
        MasterProductId: number;
        Components: Entities.ProductComponent[];
        Dimensions: Entities.ProductDimension[];
        Behavior: Entities.ProductBehavior;
        LinkedProducts: Entities.SimpleLinkedProduct[];
        PrimaryImageUrl: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ProductBehaviorClass implements ProductBehavior {
        HasSerialNumber: boolean;
        IsDiscountAllowed: boolean;
        IsManualDiscountAllowed: boolean;
        IsKitDisassemblyAllowed: boolean;
        IsNegativeQuantityAllowed: boolean;
        IsReturnAllowed: boolean;
        IsSaleAtPhysicalStoresAllowed: boolean;
        IsZeroSalePriceAllowed: boolean;
        KeyInPriceValue: number;
        KeyInQuantityValue: number;
        MustKeyInComment: boolean;
        MustPrintIndividualShelfLabelsForVariants: boolean;
        MustPromptForSerialNumberOnlyAtSale: boolean;
        MustWeighProductAtSale: boolean;
        ValidFromDateForSaleAtPhysicalStores: Date;
        ValidToDateForSaleAtPhysicalStores: Date;
        IsBlankSerialNumberAllowed: boolean;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class SimpleLinkedProductClass implements SimpleLinkedProduct {
        RecordId: number;
        ItemId: string;
        Name: string;
        Description: string;
        ProductTypeValue: number;
        DefaultUnitOfMeasure: string;
        BasePrice: number;
        Price: number;
        AdjustedPrice: number;
        Quantity: number;
        Behavior: Entities.ProductBehavior;
        Dimensions: Entities.ProductDimension[];
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ProductSearchResultClass implements ProductSearchResult {
        ItemId: string;
        Name: string;
        Price: number;
        PrimaryImageUrl: string;
        RecordId: number;
        TrackingId: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class SearchSuggestionClass implements SearchSuggestion {
        Value: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class LoyaltyPointRedemptionEstimateClass implements LoyaltyPointRedemptionEstimate {
        MaxCurrencyValueOfLoyaltyPoints: number;
        RewardPointToRedeemList: Entities.LoyaltyRewardPointLine[];
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class LoyaltyGroupClass implements LoyaltyGroup {
        Description: string;
        Name: string;
        RecordId: number;
        LoyaltyTiers: Entities.LoyaltyTier[];
        LoyaltyCardTiers: Entities.LoyaltyCardTier[];
        HighestActiveLoyaltyCardTier: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class LoyaltyTierClass implements LoyaltyTier {
        Description: string;
        RecordId: number;
        TierId: string;
        TierLevel: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class LoyaltyCardTierClass implements LoyaltyCardTier {
        RecordId: number;
        TierId: string;
        LoyaltyTierRecordId: number;
        ValidFrom: Date;
        ValidTo: Date;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class LoyaltyRewardPointClass implements LoyaltyRewardPoint {
        IsRedeemable: boolean;
        RewardPointCurrency: string;
        RewardPointTypeValue: number;
        Description: string;
        RewardPointId: string;
        IssuedPoints: number;
        UsedPoints: number;
        ExpiredPoints: number;
        ActivePoints: number;
        PointsExpiringSoon: number;
        UnvestedPoints: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class LoyaltyCardTransactionClass implements LoyaltyCardTransaction {
        ChannelName: string;
        EntryDateTime: Date;
        EntryTypeValue: number;
        ExpirationDate: Date;
        RewardPointAmountQuantity: number;
        TransactionId: string;
        constructor(odataObject?: any);
    }
    class GiftCardClass implements GiftCard {
        Id: string;
        Balance: number;
        BalanceCurrencyCode: string;
        BalanceInCardCurrency: number;
        CardCurrencyCode: string;
        GiftCardIssueAmount: number;
        GiftCardActiveFrom: Date;
        GiftCardExpireDate: Date;
        GiftCardHistoryDetails: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class OperationPermissionClass implements OperationPermission {
        OperationName: string;
        OperationId: number;
        CheckUserAccess: boolean;
        AllowAnonymousAccess: boolean;
        AllowCustomerAccess: boolean;
        AllowApplicationAccess: boolean;
        Permissions: string[];
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class StateProvinceInfoClass implements StateProvinceInfo {
        CountryRegionId: string;
        StateId: string;
        StateName: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class TransactionLogClass extends TransactionClass implements TransactionLog {
        constructor(odataObject?: any);
    }
    class KitTransactionClass extends TransactionLogClass implements KitTransaction {
        KitTransactionLines: Entities.KitTransactionLine[];
        constructor(odataObject?: any);
    }
    class SalesTaxGroupClass implements SalesTaxGroup {
        RecordId: number;
        TaxGroup: string;
        TaxGroupName: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ProductPropertyClass implements ProductProperty {
        ValueString: string;
        UnitText: string;
        PropertyTypeValue: number;
        KeyName: string;
        FriendlyName: string;
        RecordId: number;
        IsDimensionProperty: boolean;
        AttributeValueId: number;
        GroupId: number;
        GroupTypeValue: number;
        GroupName: string;
        ExtensionProperties: Entities.CommerceProperty[];
        ProductId: number;
        CatalogId: number;
        constructor(odataObject?: any);
    }
    class ProductCompositionInformationClass implements ProductCompositionInformation {
        VariantInformation: Entities.ProductVariantInformation;
        KitDefinition: Entities.KitDefinition;
        constructor(odataObject?: any);
    }
    class ProductVariantInformationClass implements ProductVariantInformation {
        ActiveVariantProductId: number;
        Variants: Entities.ProductVariant[];
        Dimensions: Entities.ProductDimensionSet[];
        ItemId: string;
        MasterProductId: number;
        constructor(odataObject?: any);
    }
    class ProductChangeTrackingInformationClass implements ProductChangeTrackingInformation {
        ModifiedDateTime: Date;
        ChangeActionValue: number;
        RequestedActionValue: number;
        constructor(odataObject?: any);
    }
    class ProductDimensionSetClass implements ProductDimensionSet {
        DimensionKey: string;
        DimensionValues: Entities.ProductDimensionValueSet[];
        constructor(odataObject?: any);
    }
    class ProductDimensionValueSetClass implements ProductDimensionValueSet {
        DimensionValue: string;
        VariantSet: number[];
        constructor(odataObject?: any);
    }
    class RichMediaLocationsClass implements RichMediaLocations {
        Items: Entities.RichMediaLocationsRichMediaLocation[];
        constructor(odataObject?: any);
    }
    class RichMediaLocationsRichMediaLocationClass implements RichMediaLocationsRichMediaLocation {
        Url: string;
        AltText: string;
        IsSelfHosted: boolean;
        IsDefault: boolean;
        constructor(odataObject?: any);
    }
    class KitDefinitionClass implements KitDefinition {
        DisassembleAtRegister: boolean;
        KitLineDefinitions: Entities.KitLineDefinition[];
        KitLineProductToVariantMap: Entities.ComponentKitVariantSet[];
        KitVariantToComponentMap: Entities.KitVariantContent[];
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ComponentKitVariantSetClass implements ComponentKitVariantSet {
        KitLineProductId: number;
        KitVariantIdList: number[];
        constructor(odataObject?: any);
    }
    class KitLineDefinitionClass implements KitLineDefinition {
        ComponentProductId: number;
        KitLineIdentifier: number;
        SubstituteProductIds: number[];
        ComponentProperties: Entities.KitLineProductProperty[];
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class KitLineProductPropertyClass implements KitLineProductProperty {
        KitLineIdentifier: number;
        ProductId: number;
        Unit: string;
        Quantity: number;
        Charge: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class KitComponentKeyClass implements KitComponentKey {
        KitLineIdentifier: number;
        DistinctProductId: number;
        constructor(odataObject?: any);
    }
    class KitVariantContentClass implements KitVariantContent {
        KitVariantId: number;
        KitComponentKeyList: Entities.KitComponentKey[];
        constructor(odataObject?: any);
    }
    class ProductLookupClauseClass implements ProductLookupClause {
        ItemId: string;
        InventDimensionId: string;
        Barcode: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class OrgUnitLocationClass implements OrgUnitLocation {
        ChannelId: number;
        Latitude: number;
        Longitude: number;
        OrgUnitName: string;
        OrgUnitNumber: string;
        Address: string;
        Street: string;
        StreetNumber: string;
        City: string;
        DistrictName: string;
        BuildingCompliment: string;
        Postbox: string;
        Zip: string;
        County: string;
        CountyName: string;
        State: string;
        StateName: string;
        Country: string;
        Distance: number;
        InventoryLocationId: string;
        InventorySiteId: string;
        PostalAddressId: number;
        OpenFrom: number;
        OpenTo: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class SalesLineDeliveryOptionClass implements SalesLineDeliveryOption {
        SalesLineId: string;
        DeliveryOptions: Entities.DeliveryOption[];
        constructor(odataObject?: any);
    }
    class DeliveryOptionClass implements DeliveryOption {
        ChargeGroup: string;
        Code: string;
        Description: string;
        RecordId: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ChannelProfilePropertyClass implements ChannelProfileProperty {
        Key: number;
        Value: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ChannelConfigurationClass implements ChannelConfiguration {
        RecordId: number;
        ChannelNaturalId: string;
        MinimumDepositPercentage: number;
        QuoteExpirationDays: number;
        PickupDeliveryModeCode: string;
        CarryoutDeliveryModeCode: string;
        CancellationChargePercentage: number;
        InventLocation: string;
        InventLocationDataAreaId: string;
        BingMapsApiKey: string;
        BingMapsEnabled: boolean;
        Currency: string;
        CatalogDefaultImageTemplate: string;
        CompanyCurrency: string;
        PriceIncludesSalesTax: boolean;
        CountryRegionId: string;
        ChannelCountryRegionISOCode: string;
        DefaultLanguageId: string;
        TimeZoneInfoId: string;
        EmailDeliveryModeCode: string;
        GiftCardItemId: string;
        EnableProductRecommendations: boolean;
        RefundableShippingAmountWithoutApproval: number;
        RefundShippingCharges: boolean;
        ReceiptSettingsValue: number;
        CustomerAttributeGroupId: number;
        NotificationRefreshInterval: number;
        AllowExchangeOnReturnOrders: boolean;
        FiscalRegistrationProcessId: string;
        ProfileProperties: Entities.ChannelProfileProperty[];
        Properties: Entities.ChannelProperty[];
        Languages: Entities.ChannelLanguage[];
        UseAdvancedAutoCharges: boolean;
        EnableReturnsForMultipleOrderInvoices: boolean;
        VoidSuspendedTransactionsOnCloseShift: number;
        EnableOmniChannelPayments: boolean;
        UseAdvancedCashManagement: boolean;
        SalesOrderHeaderAttributeGroups: number[];
        SalesOrderLinesAttributeGroups: number[];
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ChannelPropertyClass implements ChannelProperty {
        Name: string;
        Value: string;
        Channel: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ChannelLanguageClass implements ChannelLanguage {
        LanguageId: string;
        IsDefault: boolean;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class NonSalesTransactionClass extends TransactionClass implements NonSalesTransaction {
        ReasonCodeLines: Entities.ReasonCodeLine[];
        Amount: number;
        ForeignCurrency: string;
        OpenDrawer: boolean;
        DenominationDetails: Entities.DenominationDetail[];
        constructor(odataObject?: any);
    }
    class DropAndDeclareTransactionClass extends TransactionClass implements DropAndDeclareTransaction {
        TenderDetails: Entities.TenderDetail[];
        ReasonCodeLines: Entities.ReasonCodeLine[];
        OpenDrawer: boolean;
        constructor(odataObject?: any);
    }
    class ProductSearchCriteriaClass implements ProductSearchCriteria {
        Ids: number[];
        CategoryIds: number[];
        IncludeProductsFromDescendantCategories: boolean;
        SearchCondition: string;
        SkipVariantExpansion: boolean;
        Barcodes: string[];
        ItemIds: Entities.ProductLookupClause[];
        Refinement: Entities.ProductRefinerValue[];
        DownloadProductData: boolean;
        Context: Entities.ProjectionDomain;
        Language: string;
        IsOnline: boolean;
        DataLevelValue: number;
        constructor(odataObject?: any);
    }
    class ChangedProductsSearchCriteriaClass implements ChangedProductsSearchCriteria {
        SynchronizationToken: string;
        Context: Entities.ProjectionDomain;
        AsListings: boolean;
        Session: Entities.ReadChangedProductsSession;
        DataLevelValue: number;
        constructor(odataObject?: any);
    }
    class EmployeeActivitySearchCriteriaClass implements EmployeeActivitySearchCriteria {
        FromDateTimeOffset: Date;
        ToDateTimeOffset: Date;
        StoreNumber: string;
        EmployeeActivityTypeValues: number[];
        DataLevelValue: number;
        constructor(odataObject?: any);
    }
    class CartLineDeliveryPreferenceClass implements CartLineDeliveryPreference {
        LineId: string;
        DeliveryPreferenceTypeValues: number[];
        constructor(odataObject?: any);
    }
    class CartLinePromotionClass implements CartLinePromotion {
        LineId: string;
        Promotions: string[];
        constructor(odataObject?: any);
    }
    class ProductVariantClass implements ProductVariant {
        ItemId: string;
        MasterProductId: number;
        InventoryDimensionId: string;
        AdjustedPrice: number;
        BasePrice: number;
        Price: number;
        Color: string;
        Style: string;
        Size: string;
        Configuration: string;
        ColorId: string;
        StyleId: string;
        SizeId: string;
        ConfigId: string;
        VariantId: string;
        Images: Entities.RichMediaLocations[];
        DistinctProductVariantId: number;
        ProductNumber: string;
        PropertiesAsList: Entities.ProductPropertyTranslation[];
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class HardwareProfilePrinterClass implements HardwareProfilePrinter {
        ProfileId: string;
        DeviceTypeValue: number;
        DeviceName: string;
        DeviceMake: string;
        DeviceModel: string;
        DeviceDescription: string;
        CharacterSet: number;
        ReceiptProfileId: string;
        BinaryConversion: boolean;
        DocInsertRemovalTimeout: number;
        Logo: string;
        LogoAlignment: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class HardwareProfileScannerClass implements HardwareProfileScanner {
        ProfileId: string;
        DeviceTypeValue: number;
        DeviceName: string;
        DeviceDescription: string;
        DecodeData: boolean;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class HardwareProfileCashDrawerClass implements HardwareProfileCashDrawer {
        ProfileId: string;
        DeviceTypeValue: number;
        DeviceName: string;
        DeviceDescription: string;
        DeviceMake: string;
        DeviceModel: string;
        IsSharedShiftDrawer: boolean;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class TillLayoutClass implements TillLayout {
        CashChangerLayoutXml: string;
        CustomerLayoutId: string;
        CustomerLayoutXml: string;
        Height: number;
        LayoutId: string;
        LayoutTypeValue: number;
        LayoutXml: string;
        LayoutXmlPortrait: string;
        Name: string;
        ReceiptId: string;
        ReceiptItemsLayoutXml: string;
        ReceiptPaymentLayoutXml: string;
        TotalId: string;
        TotalsLayoutXml: string;
        Width: number;
        RecordId: number;
        StartScreen: number;
        ButtonGridZones: Entities.ButtonGridZone[];
        ImageZones: Entities.ImageZone[];
        ReportZones: Entities.ReportZone[];
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class SalesInvoiceClass implements SalesInvoice {
        RecordId: number;
        Id: string;
        SalesId: string;
        SalesType: string;
        InvoiceDate: Date;
        CurrencyCode: string;
        Amount: number;
        AmountPaid: number;
        Account: string;
        Name: string;
        TotalManualDiscountPercentage: number;
        TotalManualDiscountAmount: number;
        SalesInvoiceLine: Entities.SalesInvoiceLine[];
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class OrderInvoiceClass implements OrderInvoice {
        Id: string;
        CustomerAccountNumber: string;
        CustomerName: string;
        InvoiceDate: Date;
        TotalAmount: number;
        AmountPaid: number;
        AmountBalance: number;
        InvoiceTypeValue: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class TaxOverrideClass implements TaxOverride {
        Code: string;
        SourceTaxGroup: string;
        DestinationTaxGroup: string;
        SourceItemTaxGroup: string;
        DestinationItemTaxGroup: string;
        ChannelId: number;
        AdditionalDescription: string;
        Status: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class TenderTypeClass implements TenderType {
        Function: number;
        TenderTypeId: string;
        Name: string;
        OperationId: number;
        OperationName: string;
        ChangeTenderTypeId: string;
        AboveMinimumChangeAmount: number;
        AboveMinimumChangeTenderTypeId: string;
        OpenDrawer: boolean;
        UseSignatureCaptureDevice: boolean;
        MinimumSignatureCaptureAmount: number;
        IsOvertenderAllowed: boolean;
        IsUndertenderAllowed: boolean;
        MaximumOvertenderAmount: number;
        MaximumUndertenderAmount: number;
        MaximumAmountPerTransaction: number;
        MaximumAmountPerLine: number;
        MinimumAmountPerTransaction: number;
        MinimumAmountPerLine: number;
        RoundOff: number;
        CountingRequired: number;
        TakenToBank: number;
        TakenToSafe: number;
        ConnectorId: string;
        GiftCardItem: string;
        GiftCardCashoutOutThreshold: number;
        ChangeLineOnReceipt: string;
        HideCardInputDetails: boolean;
        CashDrawerLimitEnabled: boolean;
        CashDrawerLimit: number;
        RestrictReturnsWithoutReceipt: boolean;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ReasonCodeClass implements ReasonCode {
        InputRequired: boolean;
        LinkedReasonCodeId: string;
        MaximumLength: number;
        MaximumValue: number;
        MinimumLength: number;
        MinimumValue: number;
        OncePerTransaction: boolean;
        PrintInputNameOnReceipt: boolean;
        PrintInputToReceipt: boolean;
        PrintPromptToReceipt: boolean;
        Prompt: string;
        RandomFactor: number;
        RetailUseReasonCode: boolean;
        ReasonCodeId: string;
        Description: string;
        InputTypeValue: number;
        ActivityValue: number;
        IsMultiLineText: boolean;
        ReasonSubCodes: Entities.ReasonSubCode[];
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ReportDataSetClass implements ReportDataSet {
        ReportId: string;
        Parameters: Entities.CommerceProperty[];
        Locale: string;
        Output: Entities.ReportRow[];
        HasTotalRow: boolean;
        HasDisclaimer: boolean;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ZipCodeInfoClass implements ZipCodeInfo {
        ZipPostalCode: string;
        StreetName: string;
        TimeZone: number;
        CountryRegionId: string;
        StateId: string;
        CountyId: string;
        CityName: string;
        CityAlias: string;
        District: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ReasonCodeRequirementClass implements ReasonCodeRequirement {
        ReasonCodeId: string;
        SourceId: string;
        TableRefTypeValue: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class QueryResultSettingsClass implements QueryResultSettings {
        Paging: Entities.PagingInfo;
        Sorting: Entities.SortingInfo;
        constructor(odataObject?: any);
    }
    class SortingInfoClass implements SortingInfo {
        Columns: Entities.SortColumn[];
        constructor(odataObject?: any);
    }
    class SortColumnClass implements SortColumn {
        ColumnName: string;
        IsDescending: boolean;
        constructor(odataObject?: any);
    }
    class PagingInfoClass implements PagingInfo {
        Top: number;
        Skip: number;
        constructor(odataObject?: any);
    }
    class ProductPropertyTranslationClass implements ProductPropertyTranslation {
        TranslationLanguage: string;
        TranslatedProperties: Entities.ProductProperty[];
        constructor(odataObject?: any);
    }
    class NumberSequenceSeedDataClass implements NumberSequenceSeedData {
        DataTypeValue: number;
        DataValue: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class DeviceActivationResultClass implements DeviceActivationResult {
        Device: Entities.Device;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class PurchaseHistoryClass implements PurchaseHistory {
        DatePurchased: Date;
        ImageUrl: string;
        ItemId: string;
        ProductId: number;
        ProductName: string;
        ReceiptId: string;
        SalesId: string;
        ChannelId: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class NodeClass implements Node {
        ParentScopeId: string;
        ParentSequence: number;
        Id: string;
        Sequence: number;
        Description: string;
        ScreenshotUri: string;
        constructor(odataObject?: any);
    }
    class LineClass implements Line {
        ChildrenIds: number[];
        Id: number;
        Name: string;
        Description: string;
        IsLinked: boolean;
        LineMetadataId: number;
        Artifacts: Entities.ArtifactSummary[];
        MetadataPropertyValues: Entities.MetadataPropertyValue[];
        constructor(odataObject?: any);
    }
    class ScopeClass extends NodeClass implements Scope {
        Name: string;
        ScopeTypeValue: number;
        Children: Entities.Node[];
        ActiveCount: number;
        IsForm: boolean;
        constructor(odataObject?: any);
    }
    class FrameworkClass implements Framework {
        Lines: Entities.Line[];
        Id: number;
        Name: string;
        Access: string;
        Hierarchy: Entities.Line[];
        Publisher: string;
        constructor(odataObject?: any);
    }
    class UserActionClass extends NodeClass implements UserAction {
        SystemGenerated: boolean;
        GlobalId: string;
        Annotations: Entities.Annotation[];
        constructor(odataObject?: any);
    }
    class TaskUserActionClass extends UserActionClass implements TaskUserAction {
        UserActionTypeValue: number;
        Name: string;
        Comment: string;
        TaskId: string;
        constructor(odataObject?: any);
    }
    class FormUserActionClass extends UserActionClass implements FormUserAction {
        FormId: string;
        ControlLabel: string;
        constructor(odataObject?: any);
    }
    class CommandUserActionClass extends FormUserActionClass implements CommandUserAction {
        ReturnTypeValue: number;
        CommandName: string;
        ControlName: string;
        ControlType: string;
        Arguments: Entities.CommandArgument[];
        LabelId: string;
        ReturnValue: string;
        constructor(odataObject?: any);
    }
    class AnnotationClass implements Annotation {
        Description: string;
        constructor(odataObject?: any);
    }
    class RecordingClass implements Recording {
        Scopes: Entities.Scope[];
        FormContextEntries: Entities.FormContextDictionaryEntry[];
        RootScope: Entities.Scope;
        Name: string;
        Description: string;
        constructor(odataObject?: any);
    }
    class FormContextDictionaryEntryClass implements FormContextDictionaryEntry {
        FormId: string;
        FormContext: Entities.FormContext;
        constructor(odataObject?: any);
    }
    class ProductVariantResolutionContextClass implements ProductVariantResolutionContext {
        constructor(odataObject?: any);
    }
    class ProductVariantResolutionOnKitSelectionContextClass extends ProductVariantResolutionContextClass implements ProductVariantResolutionOnKitSelectionContext {
        SelectedComponents: Entities.ComponentInSlotRelation[];
        SlotId: number;
        constructor(odataObject?: any);
    }
    class WarehouseLocationClass implements WarehouseLocation {
        LocationId: string;
        IsLicensePlateControlled: boolean;
        ProfileId: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class FiscalTransactionClass implements FiscalTransaction {
        CreatedDateTime: Date;
        StoreId: string;
        TerminalId: string;
        TransactionId: string;
        TransDateTime: Date;
        LineNumber: number;
        RegisterResponse: string;
        ReceiptCopy: boolean;
        RecordGUID: string;
        RegisterStoreId: string;
        RegisterTerminalId: string;
        StaffId: string;
        RegistrationStatusValue: number;
        RegistrationProcessId: string;
        ConnectorGroup: string;
        ConnectorName: string;
        ConnectorFunctionalityProfileId: string;
        RegisterInfo: string;
        TenderLineAdjustments: Entities.FiscalTransactionTenderLineAdjustment[];
        SalesLineAdjustments: Entities.FiscalTransactionSalesLineAdjustment[];
        ReasonCodeLines: Entities.ReasonCodeLine[];
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class FulfillmentLineClass implements FulfillmentLine {
        SalesId: string;
        SalesPersonStoreId: string;
        SalesPersonId: string;
        SalesPersonFirstName: string;
        SalesPersonLastName: string;
        SalesLineNumber: number;
        ReceiptId: string;
        ChannelReferenceId: string;
        CustomerId: string;
        CustomerName: string;
        EmailAddress: string;
        DeliveryModeCode: string;
        DocumentStatusValue: number;
        FulfillmentDeliveryType: Entities.FulfillmentLineDeliveryType;
        DeliveryTypeValue: number;
        QuantityOrdered: number;
        QuantityPicked: number;
        QuantityPacked: number;
        QuantityInvoiced: number;
        StoreInventoryTotalQuantity: number;
        StoreInventoryReservedQuantity: number;
        StoreInventoryOrderedQuantity: number;
        ItemId: string;
        ProductId: number;
        ProductVariant: string;
        ItemName: string;
        FulfillmentStatus: Entities.FulfillmentLineStatus;
        FulfillmentStatusValue: number;
        UnitOfMeasureSymbol: string;
        RequestedShipDate: Date;
        RequestedDeliveryDate: Date;
        RequestedReceiptDate: Date;
        CreatedDate: Date;
        TotalAmount: number;
        Balance: number;
        ShippingAddress: Entities.Address;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class FulfillmentLineSearchCriteriaClass implements FulfillmentLineSearchCriteria {
        CustomerId: string;
        CustomerName: string;
        EmailAddress: string;
        SalesId: string;
        OrderCreatedStartDate: Date;
        OrderCreatedEndDate: Date;
        ReceiptId: string;
        StoreId: string;
        ChannelReferenceId: string;
        RequestedReceiptStartDate: Date;
        RequestedReceiptEndDate: Date;
        RequestedDeliveryStartDate: Date;
        RequestedDeliveryEndDate: Date;
        FulfillmentStatusValues: number[];
        DeliveryModeCode: string;
        WarehouseId: string;
        DeliveryTypeValue: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class CommentClass implements Comment {
        RecordId: number;
        AuthorStaffId: string;
        AuthorName: string;
        Text: string;
        CreatedDateTime: Date;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class AddressPurposeClass implements AddressPurpose {
        RecordId: number;
        AddressType: number;
        Name: string;
        Description: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class MediaLocationClass implements MediaLocation {
        Uri: string;
        AltText: string;
        IsDefault: boolean;
        IsSelfHosted: boolean;
        Priority: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class EmployeeActivityClass implements EmployeeActivity {
        StaffId: string;
        StaffName: string;
        Activity: string;
        ActivityDateTimeOffset: Date;
        StoreNumber: string;
        EmployeeActivityTypeValue: number;
        BreakCategory: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class TokenizedPaymentCardClass implements TokenizedPaymentCard {
        IsSwipe: boolean;
        TenderType: string;
        CardTokenInfo: Entities.CardTokenInfo;
        Phone: string;
        Country: string;
        House: string;
        Address1: string;
        Address2: string;
        City: string;
        State: string;
        Zip: string;
        NameOnCard: string;
        CardTypeId: string;
        ExpirationMonth: number;
        ExpirationYear: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class LineShippingAddressClass implements LineShippingAddress {
        LineId: string;
        ShippingAddress: Entities.Address;
        constructor(odataObject?: any);
    }
    class CartDeliveryPreferencesClass implements CartDeliveryPreferences {
        HeaderDeliveryPreferenceTypeValues: number[];
        CartLineDeliveryPreferences: Entities.CartLineDeliveryPreference[];
        constructor(odataObject?: any);
    }
    class LineDeliverySpecificationClass implements LineDeliverySpecification {
        LineId: string;
        DeliverySpecification: Entities.DeliverySpecification;
        constructor(odataObject?: any);
    }
    class DeliverySpecificationClass implements DeliverySpecification {
        DeliveryModeId: string;
        DeliveryPreferenceTypeValue: number;
        DeliveryAddress: Entities.Address;
        PickUpStoreId: string;
        ElectronicDeliveryEmailAddress: string;
        ElectronicDeliveryEmailContent: string;
        constructor(odataObject?: any);
    }
    class OrderSearchCriteriaClass implements OrderSearchCriteria {
        CustomerAccountNumber: string;
        CustomerName: string;
        EmailAddress: string;
        SalesId: string;
        ReceiptId: string;
        OrderStatusValues: number[];
        StartDateTime: Date;
        EndDateTime: Date;
        ChannelReferenceId: string;
        StoreId: string;
        OrderType: number;
        CustomFilters: Entities.SearchFilter[];
        constructor(odataObject?: any);
    }
    class ReceiptRetrievalCriteriaClass implements ReceiptRetrievalCriteria {
        IsCopy: boolean;
        IsRemoteTransaction: boolean;
        IsPreview: boolean;
        QueryBySalesId: boolean;
        ReceiptTypeValue: number;
        ShiftId: number;
        ShiftTerminalId: string;
        HardwareProfileId: string;
        constructor(odataObject?: any);
    }
    class CartSearchCriteriaClass implements CartSearchCriteria {
        CartId: string;
        ExpectedCartVersion: number;
        CustomerAccountNumber: string;
        IncludeAnonymous: boolean;
        SuspendedOnly: boolean;
        CartTypeValue: number;
        constructor(odataObject?: any);
    }
    class FulfillmentLineParameterClass implements FulfillmentLineParameter {
        SalesId: string;
        SalesLineNumber: number;
        Quantity: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ShipFulfillmentLineClass extends FulfillmentLineParameterClass implements ShipFulfillmentLine {
        ProductId: number;
        constructor(odataObject?: any);
    }
    class RejectFulfillmentLineClass extends FulfillmentLineParameterClass implements RejectFulfillmentLine {
        RejectedQuantity: number;
        InfoCodeId: string;
        SubInfoCodeId: string;
        constructor(odataObject?: any);
    }
    class ReadChangedProductsSessionClass implements ReadChangedProductsSession {
        Id: string;
        TotalNumberOfProducts: number;
        NumberOfProductsRead: number;
        NumberOfProductsReadInCurrentPage: number;
        NextSynchronizationToken: string;
        IsInitialSync: boolean;
        constructor(odataObject?: any);
    }
    class DeletedListingsResultClass implements DeletedListingsResult {
        HasMorePublishedListings: boolean;
        DeletedListings: Entities.ListingIdentity[];
        constructor(odataObject?: any);
    }
    class ListingPublishStatusClass implements ListingPublishStatus {
        PublishStatusValue: number;
        ListingModifiedDateTime: Date;
        ChannelListingId: string;
        ChannelId: number;
        CatalogId: number;
        ProductId: number;
        LanguageId: string;
        AppliedActionValue: number;
        StatusMessage: string;
        Tag: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class OrgUnitLocationSearchCriteriaClass implements OrgUnitLocationSearchCriteria {
        OrgUnitNumber: string;
        OrgUnitName: string;
        constructor(odataObject?: any);
    }
    class StoreHoursClass implements StoreHours {
        RegularStoreHours: Entities.RegularStoreHours;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class CartPromotionsClass implements CartPromotions {
        HeaderPromotions: string[];
        CartLinePromotions: Entities.CartLinePromotion[];
        constructor(odataObject?: any);
    }
    class ItemUnitClass implements ItemUnit {
        ItemId: string;
        VariantInventoryDimensionId: string;
        Product: number;
        DistinctProductVariant: number;
        UnitOfMeasure: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ProductAvailableQuantityClass implements ProductAvailableQuantity {
        ProductId: number;
        AvailableQuantity: number;
        UnitOfMeasure: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class OrgUnitAvailabilitySearchCriteriaClass implements OrgUnitAvailabilitySearchCriteria {
        OrgUnitName: string;
        OrgUnitNumber: string;
        constructor(odataObject?: any);
    }
    class InvoiceSearchCriteriaClass implements InvoiceSearchCriteria {
        CustomerId: string;
        InvoiceIds: string[];
        InvoiceTypeValues: number[];
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class PickAndPackSalesLineParameterClass implements PickAndPackSalesLineParameter {
        SalesLineNumber: number;
        Quantity: number;
        constructor(odataObject?: any);
    }
    class ProjectionDomainClass implements ProjectionDomain {
        ChannelId: number;
        CatalogId: number;
        constructor(odataObject?: any);
    }
    class AffiliationLoyaltyTierClass implements AffiliationLoyaltyTier {
        AffiliationId: number;
        LoyaltyTierId: number;
        AffiliationTypeValue: number;
        ReasonCodeLines: Entities.ReasonCodeLine[];
        CustomerId: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ChargeCodeClass implements ChargeCode {
        Code: string;
        ModuleTypeValue: number;
        Description: string;
        ItemTaxGroupId: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class PaymentMerchantInformationClass implements PaymentMerchantInformation {
        PaymentConnectorPropertiesXml: string;
        MerchantPropertiesHashValue: string;
        ServiceAccountId: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class StoreSafeClass implements StoreSafe {
        SafeNumber: string;
        Name: string;
        StoreNumber: string;
        SafeBalance: number;
        LastUpdatedTime: Date;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class CreateHardwareStationTokenResultClass implements CreateHardwareStationTokenResult {
        HardwareStationToken: string;
        PairingKey: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ValidateHardwareStationTokenResultClass implements ValidateHardwareStationTokenResult {
        PairingKey: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class DownloadSessionClass implements DownloadSession {
        Id: number;
        JobId: string;
        JobDescription: string;
        FileSize: number;
        RowsAffected: number;
        Checksum: string;
        DateDownloaded: string;
        DateRequested: string;
        DataStoreName: string;
        StatusValue: number;
        Message: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class LoyaltyRewardPointActivityClass implements LoyaltyRewardPointActivity {
        ActivityDate: Date;
        LoyaltyRewardPointTimelineEntryType: string;
        ExtensibleLoyaltyRewardPointActivityEntryTypeValue: number;
        LoyaltyPoints: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class CurrencyRequestClass implements CurrencyRequest {
        AmountToConvert: number;
        CurrencyCode: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class HardwareStationProfileClass implements HardwareStationProfile {
        RecordId: number;
        HardwareStationId: string;
        HardwareStationTypeValue: number;
        HardwareProfileId: string;
        HardwareStationName: string;
        HardwareStationDescription: string;
        HardwareStationUrl: string;
        HardwareStationHostName: string;
        HardwareStationEftTerminalId: string;
        HardwareConfigurations: Entities.HardwareConfigurations;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class NameValuePairClass implements NameValuePair {
        Name: string;
        Value: string;
        constructor(odataObject?: any);
    }
    class LinkToExistingCustomerResultClass implements LinkToExistingCustomerResult {
        EmailAddress: string;
        ExternalIdentityProvider: string;
        ExternalIdentityLinkRecordId: number;
        constructor(odataObject?: any);
    }
    class OfflineSyncStatsLineClass implements OfflineSyncStatsLine {
        IsUploadJob: boolean;
        JobDescription: string;
        LastSyncDateTime: Date;
        Status: string;
        FileSize: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class StorageAccessTokenClass implements StorageAccessToken {
        Url: string;
        SasKey: string;
        constructor(odataObject?: any);
    }
    class TaskGuidesSearchResultClass implements TaskGuidesSearchResult {
        Lines: Entities.Line[];
        FrameworkPublisherName: string;
        FrameworkName: string;
        constructor(odataObject?: any);
    }
    class AuditEventClass implements AuditEvent {
        EventId: number;
        Channel: number;
        Store: string;
        Terminal: string;
        UploadType: string;
        EventType: string;
        DurationInMilliseconds: number;
        Source: string;
        EventMessage: string;
        LogLevel: string;
        Staff: string;
        ShiftId: number;
        ReferenceId: number;
        RefChannel: number;
        RefStore: string;
        RefTerminal: string;
        RefTransactionId: string;
        AuditEventTypeValue: number;
        FiscalTransactions: Entities.AuditEventFiscalTransaction[];
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ItemAvailabilityClass implements ItemAvailability {
        ItemId: string;
        VariantInventoryDimensionId: string;
        InventoryLocationId: string;
        ProductId: number;
        AvailableQuantity: number;
        OrderedSum: number;
        PhysicalReserved: number;
        UnitOfMeasure: string;
        ProductDimensions: Entities.ProductDimension[];
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class InventoryAvailableToPromiseClass extends ItemAvailabilityClass implements InventoryAvailableToPromise {
        Date: string;
        constructor(odataObject?: any);
    }
    class NotificationItemClass implements NotificationItem {
        Action: number;
        ActionName: string;
        NotificationDetails: Entities.NotificationDetail[];
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class FiscalIntegrationDocumentRetrievalCriteriaClass implements FiscalIntegrationDocumentRetrievalCriteria {
        TransactionId: string;
        IsRemoteTransaction: boolean;
        QueryBySalesId: boolean;
        FiscalRegistrationEventTypeValue: number;
        ShiftId: number;
        ShiftTerminalId: string;
        DocumentContext: Entities.FiscalIntegrationDocumentContext;
        constructor(odataObject?: any);
    }
    class FiscalIntegrationDocumentClass implements FiscalIntegrationDocument {
        Document: string;
        DocumentGenerationResultTypeValue: number;
        FiscalConnectorTechnicalProfile: Entities.FiscalIntegrationTechnicalProfile;
        DocumentAdjustment: Entities.FiscalIntegrationDocumentAdjustment;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class FiscalIntegrationRegistrationResultClass implements FiscalIntegrationRegistrationResult {
        TransactionID: string;
        Response: string;
        SubmittedDocument: string;
        RegisterInfo: string;
        RegistrationStatusValue: number;
        FiscalRegistrationEventTypeValue: number;
        DocumentAdjustment: Entities.FiscalIntegrationDocumentAdjustment;
        ReasonCodeLines: Entities.ReasonCodeLine[];
        constructor(odataObject?: any);
    }
    class FiscalIntegrationRegistrationProcessClass implements FiscalIntegrationRegistrationProcess {
        RecordId: number;
        RegistrationProcessId: string;
        Description: string;
        RegistrationProcessLines: Entities.FiscalIntegrationRegistrationProcessLine[];
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class FiscalIntegrationSupportedEventsClass implements FiscalIntegrationSupportedEvents {
        FunctionalityProfileGroupId: string;
        SupportedFiscalEventTypes: number[];
        SupportedNonFiscalEventTypes: number[];
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class FiscalIntegrationTechnicalProfileClass implements FiscalIntegrationTechnicalProfile {
        ProfileId: string;
        Description: string;
        ConnectorName: string;
        ConnectorTypeValue: number;
        TechnicalProfile: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ExtensionProfileClass implements ExtensionProfile {
        ExtensionServiceUrl: string;
        AttachedServices: Entities.AttachedService[];
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class AttributeProductClass implements AttributeProduct {
        RecordId: number;
        Name: string;
        KeyName: string;
        DataTypeValue: number;
        NameTranslations: Entities.TextValueTranslation[];
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class MediaBlobClass implements MediaBlob {
        MediaType: string;
        Content: string;
        IsDefault: boolean;
        AltText: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class TerminalInfoClass implements TerminalInfo {
        TerminalId: string;
        DeviceNumber: string;
        Name: string;
        DeviceType: number;
        ActivationStatusValue: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ExtensibleEnumerationContainerClass implements ExtensibleEnumerationContainer {
        TypeName: string;
        ExtensibleEnumerations: Entities.ExtensibleEnumeration[];
        constructor(odataObject?: any);
    }
    class PackingSlipDataClass implements PackingSlipData {
        PackingSlipId: string;
        CreatedDateTime: Date;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class OrgUnitAddressClass extends AddressClass implements OrgUnitAddress {
        constructor(odataObject?: any);
    }
    class WarehouseDetailsClass extends AddressClass implements WarehouseDetails {
        InventoryLocationId: string;
        constructor(odataObject?: any);
    }
    class AttributeBooleanValueClass extends AttributeValueBaseClass implements AttributeBooleanValue {
        Value: boolean;
        constructor(odataObject?: any);
    }
    class AttributeCurrencyValueClass extends AttributeValueBaseClass implements AttributeCurrencyValue {
        CurrencyValue: number;
        CurrencyCode: string;
        constructor(odataObject?: any);
    }
    class AttributeDateTimeOffsetValueClass extends AttributeValueBaseClass implements AttributeDateTimeOffsetValue {
        Value: Date;
        constructor(odataObject?: any);
    }
    class AttributeFloatValueClass extends AttributeValueBaseClass implements AttributeFloatValue {
        Value: number;
        UnitSymbol: string;
        constructor(odataObject?: any);
    }
    class AttributeIntValueClass extends AttributeValueBaseClass implements AttributeIntValue {
        Value: number;
        UnitSymbol: string;
        constructor(odataObject?: any);
    }
    class AttributeMediaLocationValueClass extends AttributeValueBaseClass implements AttributeMediaLocationValue {
        Value: Entities.MediaLocation[];
        constructor(odataObject?: any);
    }
    class AttributeTextValueClass extends AttributeValueBaseClass implements AttributeTextValue {
        TextValue: string;
        TextValueTranslations: Entities.TextValueTranslation[];
        constructor(odataObject?: any);
    }
    class ButtonGridButtonClass implements ButtonGridButton {
        Action: number;
        ActionProperty: string;
        BackColorAsARGB: Entities.ARGBColor;
        BorderColorAsARGB: Entities.ARGBColor;
        Column: number;
        ColumnSpan: number;
        DisplayText: string;
        FontColorAsARGB: Entities.ARGBColor;
        ButtonId: number;
        Row: number;
        RowSpan: number;
        UseCustomLookAndFeel: boolean;
        PictureAsBase64: string;
        FontStyle: number;
        FontSize: number;
        EnableCustomFontForPOS: boolean;
        HideButtonText: boolean;
        Tooltip: string;
        EnableLiveContent: boolean;
        NotificationContentAlignment: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ARGBColorClass implements ARGBColor {
        A: number;
        R: number;
        G: number;
        B: number;
        constructor(odataObject?: any);
    }
    class ExtensiblePeriodicDiscountOfferTypeClass extends ExtensibleEnumerationClass implements ExtensiblePeriodicDiscountOfferType {
        constructor(odataObject?: any);
    }
    class ChargeLineOverrideClass implements ChargeLineOverride {
        OriginalAmount: number;
        OverrideAmount: number;
        OverrideReasonDescription: string;
        OverrideDateTime: Date;
        UserId: string;
        constructor(odataObject?: any);
    }
    class TaxLineGTEClass extends TaxLineClass implements TaxLineGTE {
        TaxComponent: string;
        constructor(odataObject?: any);
    }
    class TaxMeasureClass implements TaxMeasure {
        Path: string;
        Value: number;
        DataAreaId: string;
        SaleLineNumber: number;
        StoreId: string;
        TerminalId: string;
        TransactionId: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class CardTokenInfoClass implements CardTokenInfo {
        CardToken: string;
        UniqueCardId: string;
        ServiceAccountId: string;
        MaskedCardNumber: string;
        constructor(odataObject?: any);
    }
    class TrackingInfoClass implements TrackingInfo {
        TrackingNumber: string;
        ServiceType: string;
        PackageWeight: Entities.Weight;
        ShippedOnDate: Date;
        Status: string;
        DeliveredOnDate: Date;
        EstimatedDeliveryDate: Date;
        TrackingUrl: string;
        PackagingType: string;
        DestinationAddress: Entities.Address;
        OriginAddress: Entities.Address;
        ShipmentProgress: Entities.ShipmentProgress[];
        ShippingCharge: number;
        constructor(odataObject?: any);
    }
    class WeightClass implements Weight {
        Value: number;
        Unit: string;
        constructor(odataObject?: any);
    }
    class ShipmentProgressClass implements ShipmentProgress {
        Location: Entities.Address;
        DateTime: Date;
        Activity: string;
        constructor(odataObject?: any);
    }
    class ShiftKeyClass implements ShiftKey {
        ShiftTerminalId: string;
        ShiftId: number;
        Store: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class AddressFormattingInfoClass implements AddressFormattingInfo {
        AddressComponentNameValue: number;
        LineNumber: number;
        IsDataEntryOnly: boolean;
        NewLine: boolean;
        Expand: boolean;
        Inactive: boolean;
        Special: boolean;
        NumberOfSpaces: number;
        Separator: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ScaleUnitConfigurationClass implements ScaleUnitConfiguration {
        Id: string;
        Name: string;
        Region: string;
        constructor(odataObject?: any);
    }
    class HardwareConfigurationsClass implements HardwareConfigurations {
        CashDrawerConfigurations: Entities.HardwareConfiguration[];
        PrinterConfigurations: Entities.HardwareConfiguration[];
        PinPadConfiguration: Entities.HardwareConfiguration;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class HardwareConfigurationClass implements HardwareConfiguration {
        RecordId: number;
        HardwareStationRecordId: number;
        TerminalId: string;
        DeviceName: string;
        IPAddress: string;
        Port: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class PaymentErrorClass implements PaymentError {
        Code: string;
        Message: string;
        IsLocalized: boolean;
        constructor(odataObject?: any);
    }
    class PrinterClass implements Printer {
        Name: string;
        PrinterType: number;
        Terminal: number;
        PrintBehaviorValue: number;
        ReceiptLayoutId: string;
        HardwareProfileId: string;
        ReceiptType: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class UnitOfMeasureConversionClass implements UnitOfMeasureConversion {
        ItemId: string;
        FromUnitOfMeasureId: string;
        ToUnitOfMeasureId: string;
        FromUnitOfMeasureSymbol: string;
        ToUnitOfMeasureSymbol: string;
        IsBackward: boolean;
        RecordId: number;
        ProductRecordId: number;
        Factor: number;
        Numerator: number;
        Denominator: number;
        InnerOffset: number;
        OuterOffset: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class PriceLineClass implements PriceLine {
        RecordId: number;
        Value: number;
        PriceMethod: string;
        OriginId: string;
        PriceChangedByExtensions: boolean;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class BasePriceLineClass extends PriceLineClass implements BasePriceLine {
        constructor(odataObject?: any);
    }
    class PriceAdjustmentPriceLineClass extends PriceLineClass implements PriceAdjustmentPriceLine {
        IsCompoundable: boolean;
        Concurrency: string;
        constructor(odataObject?: any);
    }
    class TradeAgreementPriceLineClass extends PriceLineClass implements TradeAgreementPriceLine {
        constructor(odataObject?: any);
    }
    class ReturnLabelContentClass implements ReturnLabelContent {
        ReturnLocationText: string;
        ReturnWarehouseText: string;
        ReturnReasonText: string;
        ReturnPalleteText: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class LoyaltyRewardPointLineClass implements LoyaltyRewardPointLine {
        TransactionId: string;
        SaleLineNumber: number;
        LoyaltyGroupRecordId: number;
        LoyaltyCardNumber: string;
        CustomerAccount: string;
        EntryDate: Date;
        EntryTime: number;
        EntryTypeValue: number;
        ExpirationDate: Date;
        LineNumber: number;
        LoyaltyTierRecordId: number;
        RewardPointRecordId: number;
        RewardPointAmountQuantity: number;
        RewardPointId: string;
        RewardPointIsRedeemable: boolean;
        RewardPointType: string;
        RewardPointCurrency: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class TransferOrderJournalLineClass implements TransferOrderJournalLine {
        ItemId: string;
        ItemName: string;
        InventDimId: string;
        TotalQuantityShipped: number;
        QuantityShipped: number;
        TransferQuantity: number;
        UnitId: string;
        ConfigId: string;
        InventSizeId: string;
        InventColorId: string;
        InventStyleId: string;
        DeliveryMethod: string;
        Barcode: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class KitTransactionLineClass implements KitTransactionLine {
        ItemId: string;
        Quantity: number;
        InventoryDimensionId: string;
        ProductId: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class TenderDetailClass implements TenderDetail {
        LineNumber: number;
        Amount: number;
        AmountInForeignCurrency: number;
        ForeignCurrencyExchangeRate: number;
        ForeignCurrency: string;
        BankBagNumber: string;
        TenderTypeId: string;
        TenderRecount: number;
        DenominationDetails: Entities.DenominationDetail[];
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class DenominationDetailClass implements DenominationDetail {
        Type: number;
        Currency: string;
        DenominationAmount: number;
        QuantityDeclared: number;
        AmountDeclared: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ButtonGridZoneClass implements ButtonGridZone {
        ButtonGridId: string;
        ZoneId: string;
        ZoneName: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ImageZoneClass implements ImageZone {
        PictureId: number;
        PictureAsBase64: string;
        ZoneId: string;
        ZoneName: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ReportZoneClass implements ReportZone {
        ReportRecordId: number;
        ZoneId: string;
        ZoneName: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class SalesInvoiceLineClass implements SalesInvoiceLine {
        RecordId: number;
        ItemId: string;
        ProductName: string;
        InventDimensionId: string;
        InventTransactionId: string;
        Quantity: number;
        Price: number;
        DiscountPercent: number;
        DiscountAmount: number;
        BatchId: string;
        NetAmount: number;
        Site: string;
        Warehouse: string;
        SerialId: string;
        ColorId: string;
        SizeId: string;
        StyleId: string;
        ConfigId: string;
        ColorName: string;
        SizeName: string;
        StyleName: string;
        ConfigName: string;
        SalesTaxGroup: string;
        ItemTaxGroup: string;
        SalesMarkup: number;
        TotalDiscount: number;
        TotalPercentageDiscount: number;
        LineDiscount: number;
        PeriodicDiscount: number;
        PeriodicPercentageDiscount: number;
        LineManualDiscountPercentage: number;
        LineManualDiscountAmount: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ReportRowClass implements ReportRow {
        RowData: Entities.CommerceProperty[];
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class FormAnnotationClass extends AnnotationClass implements FormAnnotation {
        MenuItemLabel: string;
        MenuItemName: string;
        MenuItemType: string;
        constructor(odataObject?: any);
    }
    class TaskGuideAnnotationClass extends AnnotationClass implements TaskGuideAnnotation {
        RecordingValueType: string;
        Title: string;
        ExampleText: string;
        Hidden: boolean;
        GlobalId: string;
        constructor(odataObject?: any);
    }
    class CommandArgumentClass implements CommandArgument {
        Value: string;
        IsReference: boolean;
        constructor(odataObject?: any);
    }
    class PropertyUserActionClass extends FormUserActionClass implements PropertyUserAction {
        Value: string;
        ValueLabel: string;
        PropertyName: string;
        ControlName: string;
        ControlType: string;
        UserActionType: string;
        IsReference: boolean;
        LabelId: string;
        constructor(odataObject?: any);
    }
    class InfoUserActionClass extends UserActionClass implements InfoUserAction {
        FormId: string;
        ControlLabel: string;
        ControlLabelId: string;
        ControlName: string;
        Text: string;
        Notes: string;
        constructor(odataObject?: any);
    }
    class MenuItemUserActionClass extends UserActionClass implements MenuItemUserAction {
        MenuItemName: string;
        MenuItemType: string;
        NavigationPath: string[];
        constructor(odataObject?: any);
    }
    class ValidationUserActionClass extends UserActionClass implements ValidationUserAction {
        Name: string;
        Comment: string;
        constructor(odataObject?: any);
    }
    class ArtifactSummaryClass implements ArtifactSummary {
        ArtifactType: string;
        LanguageTags: string[];
        constructor(odataObject?: any);
    }
    class MetadataPropertyValueClass implements MetadataPropertyValue {
        PropertyId: string;
        SingleValue: string;
        MultiValue: Entities.MetadataText[];
        Tags: string[];
        ComboBox: string;
        MultiSelect: string[];
        Links: Entities.MetadataHypertextLink[];
        constructor(odataObject?: any);
    }
    class MetadataTextClass implements MetadataText {
        Id: string;
        Text: string;
        constructor(odataObject?: any);
    }
    class MetadataHypertextLinkClass implements MetadataHypertextLink {
        Id: string;
        DisplayName: string;
        Url: string;
        constructor(odataObject?: any);
    }
    class FormContextClass implements FormContext {
        FormID: string;
        FormName: string;
        RecordingName: string;
        HasMetadata: boolean;
        Sequence: number;
        Annotations: Entities.Annotation[];
        constructor(odataObject?: any);
    }
    class FiscalTransactionTenderLineAdjustmentClass implements FiscalTransactionTenderLineAdjustment {
        TenderLineNumber: number;
        AdjustmentAmount: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class FiscalTransactionSalesLineAdjustmentClass implements FiscalTransactionSalesLineAdjustment {
        SalesLineNumber: number;
        Exclude: boolean;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class SalesAffiliationLoyaltyTierClass extends AffiliationLoyaltyTierClass implements SalesAffiliationLoyaltyTier {
        TransactionId: string;
        ChannelId: number;
        TerminalId: string;
        ReceiptId: string;
        StaffId: string;
        constructor(odataObject?: any);
    }
    class TaxViewLineClass implements TaxViewLine {
        TaxId: string;
        TaxAmount: number;
        constructor(odataObject?: any);
    }
    class CouponClass implements Coupon {
        CodeId: string;
        Code: string;
        DiscountOfferId: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class CustomerAccountDepositLineClass implements CustomerAccountDepositLine {
        Amount: number;
        CustomerAccount: string;
        Comment: string;
        StoreNumber: string;
        Terminal: string;
        Shift: string;
        TransactionStatusValue: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class CustomerAttributeClass implements CustomerAttribute {
        AttributeValue: Entities.CommercePropertyValue;
        Units: string;
        RecordId: number;
        Name: string;
        KeyName: string;
        DataTypeValue: number;
        NameTranslations: Entities.TextValueTranslation[];
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ShiftTaxLineClass implements ShiftTaxLine {
        TaxCode: string;
        TaxAmount: number;
        TaxRate: number;
        NetAmount: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class LinkedProductClass implements LinkedProduct {
        ProductRecordId: number;
        LinkedProductRecordId: number;
        Quantity: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class RelatedProductClass implements RelatedProduct {
        ProductRecordId: number;
        RelatedProductRecordId: number;
        CatalogId: number;
        RelationName: string;
        IsExcludedRelation: boolean;
        IsDirectRelation: boolean;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class KitComponentClass implements KitComponent {
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ListingIdentityClass implements ListingIdentity {
        ProductId: number;
        LanguageId: string;
        CatalogId: number;
        Tag: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class RegularStoreHoursClass implements RegularStoreHours {
        MondayOpenTime: number;
        MondayCloseTime: number;
        IsClosedOnMonday: boolean;
        TuesdayOpenTime: number;
        TuesdayCloseTime: number;
        IsClosedOnTuesday: boolean;
        WednesdayOpenTime: number;
        WednesdayCloseTime: number;
        IsClosedOnWednesday: boolean;
        ThursdayOpenTime: number;
        ThursdayCloseTime: number;
        IsClosedOnThursday: boolean;
        FridayOpenTime: number;
        FridayCloseTime: number;
        IsClosedOnFriday: boolean;
        SaturdayOpenTime: number;
        SaturdayCloseTime: number;
        IsClosedOnSaturday: boolean;
        SundayOpenTime: number;
        SundayCloseTime: number;
        IsClosedOnSunday: boolean;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ExtensibleAuditEventTypeClass extends ExtensibleEnumerationClass implements ExtensibleAuditEventType {
        constructor(odataObject?: any);
    }
    class AuditEventFiscalTransactionClass implements AuditEventFiscalTransaction {
        EventId: number;
        LineNumber: number;
        RegisterResponse: string;
        Store: string;
        TransDateTime: Date;
        Terminal: string;
        UploadType: string;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class NotificationDetailClass implements NotificationDetail {
        ActionProperty: string;
        ItemCount: number;
        DisplayText: string;
        IsNew: boolean;
        LastUpdatedDateTimeStr: string;
        IsSuccess: boolean;
        IsLiveContentOnly: boolean;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class FiscalIntegrationDocumentContextClass implements FiscalIntegrationDocumentContext {
        AuditEvent: Entities.AuditEvent;
        constructor(odataObject?: any);
    }
    class FiscalIntegrationDocumentAdjustmentClass implements FiscalIntegrationDocumentAdjustment {
        TenderLineAdjustments: Entities.FiscalTransactionTenderLineAdjustment[];
        SalesLineAdjustments: Entities.FiscalTransactionSalesLineAdjustment[];
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class FiscalIntegrationRegistrationProcessLineClass implements FiscalIntegrationRegistrationProcessLine {
        RegistrationProcessId: string;
        SequenceNumber: number;
        Priority: number;
        ConnectorTypeValue: number;
        FunctionalityProfileGroupId: string;
        AllowSkip: boolean;
        AllowMarkAsRegistered: boolean;
        RegistrationSettings: Entities.FiscalIntegrationRegistrationSettings;
        SupportedFiscalEventTypes: number[];
        SupportedNonFiscalEventTypes: number[];
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class FiscalIntegrationRegistrationSettingsClass implements FiscalIntegrationRegistrationSettings {
        SkipReasonCode: string;
        MarkAsRegisteredReasonCode: string;
        constructor(odataObject?: any);
    }
    class AttachedServiceClass implements AttachedService {
        BaseUrl: string;
        ServiceId: string;
        StatusValue: number;
        ExtensionProperties: Entities.CommerceProperty[];
        constructor(odataObject?: any);
    }
    class ParameterSetClass implements ParameterSet {
        constructor(odataObject?: any);
    }
    class CommerceExceptionClass implements CommerceException {
        LocalizedMessage: string;
        ErrorResourceId: string;
        constructor(odataObject?: any);
    }
    class DataValidationExceptionClass extends CommerceExceptionClass implements DataValidationException {
        ValidationResults: Entities.DataValidationFailure[];
        constructor(odataObject?: any);
    }
    class MissingRequiredReasonCodeExceptionClass extends DataValidationExceptionClass implements MissingRequiredReasonCodeException {
        RequiredReasonCodes: Entities.ReasonCode[];
        TransactionRequiredReasonCodeIds: string[];
        ReasonCodeRequirements: Entities.ReasonCodeRequirement[];
        constructor(odataObject?: any);
    }
    class SecurityExceptionClass extends CommerceExceptionClass implements SecurityException {
        constructor(odataObject?: any);
    }
    class DeviceAuthenticationExceptionClass extends SecurityExceptionClass implements DeviceAuthenticationException {
        constructor(odataObject?: any);
    }
    class HeadquarterTransactionServiceExceptionClass extends CommerceExceptionClass implements HeadquarterTransactionServiceException {
        constructor(odataObject?: any);
    }
    class UserAuthenticationExceptionClass extends SecurityExceptionClass implements UserAuthenticationException {
        constructor(odataObject?: any);
    }
    class UserAuthorizationExceptionClass extends SecurityExceptionClass implements UserAuthorizationException {
        constructor(odataObject?: any);
    }
    class FeatureNotSupportedExceptionClass extends CommerceExceptionClass implements FeatureNotSupportedException {
        constructor(odataObject?: any);
    }
    class CartValidationExceptionClass extends DataValidationExceptionClass implements CartValidationException {
        constructor(odataObject?: any);
    }
    class TenderValidationExceptionClass extends DataValidationExceptionClass implements TenderValidationException {
        TenderTypeId: string;
        constructor(odataObject?: any);
    }
    class PaymentExceptionClass extends CommerceExceptionClass implements PaymentException {
        PaymentSdkErrors: Entities.PaymentError[];
        constructor(odataObject?: any);
    }
    class CommerceDataExchangeExceptionClass extends CommerceExceptionClass implements CommerceDataExchangeException {
        constructor(odataObject?: any);
    }
    class ExtensibleEnumerationExceptionClass extends CommerceExceptionClass implements ExtensibleEnumerationException {
        constructor(odataObject?: any);
    }
    class DataValidationFailureClass implements DataValidationFailure {
        ErrorContext: string;
        ErrorResourceId: string;
        MemberNames: string[];
        LocalizedMessage: string;
        constructor(odataObject?: any);
    }
    class ItemDiscontinuedExceptionClass extends CommerceExceptionClass implements ItemDiscontinuedException {
        RemovedUnavailableItemIds: string;
        constructor(odataObject?: any);
    }
    class InsufficientCredentialLengthExceptionClass extends DataValidationExceptionClass implements InsufficientCredentialLengthException {
        ActualLength: number;
        MinLength: number;
        constructor(odataObject?: any);
    }
    class StaffPasswordExpiredExceptionClass extends UserAuthenticationExceptionClass implements StaffPasswordExpiredException {
        StaffId: string;
        constructor(odataObject?: any);
    }
    class WrongEndpointExceptionClass extends CommerceExceptionClass implements WrongEndpointException {
        RedirectUri: string;
        constructor(odataObject?: any);
    }
}
declare namespace Commerce.Client.Entities {
    enum ConnectionStatusType {
        Online = 0,
        SeamlessOffline = 1,
        ManualOffline = 2
    }
}
declare namespace Commerce.Client.Entities {
    class ExtensionError extends Error {
        readonly localizedMessage: string;
        constructor(localizedMessage: string);
    }
}
declare namespace Commerce.Client.Entities {
    enum GiftCardEntryType {
        Keyboard = 0,
        Barcode = 1,
        MagneticStripReader = 2,
        PaymentTerminal = 3
    }
}
declare namespace Commerce.Client.Entities {
    enum GiftCardOperation {
        None = 0,
        IssueNew = 1,
        AddExisting = 2,
        CheckBalance = 3,
        Pay = 4,
        CashOut = 5
    }
}
declare namespace Commerce.Client.Entities {
    interface IAttributesOnCartLine {
        cartLineId: string;
        attributes: Proxy.Entities.AttributeValueBase[];
    }
}
declare namespace Commerce.Client.Entities {
    interface IAuditEventTransactionReference {
        Channel: number;
        Store: string;
        Terminal: string;
        TransactionId: string;
    }
}
declare namespace Commerce.Client.Entities {
    interface IAuthenticationToken {
        token: string;
        tokenType: string;
        name: string;
    }
}
declare namespace Commerce.Client.Entities {
    interface ICancelable {
        canceled: boolean;
    }
}
declare namespace Commerce.Client.Entities {
    interface ICancelableDataResult<TResult> extends ICancelable {
        data: TResult;
    }
}
declare namespace Commerce.Client.Entities {
    interface ICartLineDiscount {
        cartLine: Proxy.Entities.CartLine;
        discountValue?: number;
    }
}
declare namespace Commerce.Client.Entities {
    interface ICustomerDetails {
        customer: Proxy.Entities.Customer;
        primaryAddress: Proxy.Entities.Address;
    }
}
declare namespace Commerce.Client.Entities {
    interface IExtensionPropertiesOnCartLine {
        cartLineId: string;
        extensionProperties: Proxy.Entities.CommerceProperty[];
    }
}
declare namespace Commerce.Client.Entities {
    interface INotification extends Proxy.Entities.NotificationItem {
        lastPullDateTime: Date;
    }
}
declare namespace Commerce.Client.Entities {
    interface IPickingAndReceivingOrder {
        orderId?: string;
        orderType?: number;
        status?: string;
        lines?: number;
        totalOrdered?: number;
        totalReceived?: number;
        totalReceivedNow?: number;
        orderLines?: IPickingAndReceivingOrderLine[];
        originalOrder?: any;
        allLinesReceived?: boolean;
        extensionProperties?: Proxy.Entities.CommerceProperty[];
    }
}
declare namespace Commerce.Client.Entities {
    interface IPickingAndReceivingOrderLine {
        recordId?: number;
        productRecordId?: number;
        productNumber?: string;
        description?: string;
        quantityOrdered?: number;
        quantityReceived?: number;
        quantityReceivedNow?: number;
        unitOfMeasure?: string;
        colorId?: string;
        configurationId?: string;
        sizeId?: string;
        styleId?: string;
        colorTranslation?: string;
        configurationTranslation?: string;
        sizeTranslation?: string;
        styleTranslation?: string;
        inventDimId?: string;
        originalLine: any;
        wmsLocationId?: string;
        product?: Proxy.Entities.SimpleProduct;
    }
}
declare namespace Commerce.Client.Entities {
    interface IProductSaleReturnDetails {
        product?: Proxy.Entities.SimpleProduct;
        productId?: number;
        quantity: number;
        unitOfMeasureSymbol?: string;
        barcode?: Proxy.Entities.Barcode;
        trackingId?: string;
        catalogId?: number;
        preSelectedDimensions?: Proxy.Entities.ProductDimension[];
        entryType?: Proxy.Entities.BarcodeEntryMethodType;
    }
    interface ISalesLineReturn {
        returnTransactionId: string;
        salesLine: Proxy.Entities.SalesLine;
        quantity: number;
    }
    interface IProductReturnDetails {
        manualReturn: IProductSaleReturnDetails;
        cartLine: Proxy.Entities.CartLine;
        salesLineReturn: ISalesLineReturn;
    }
}
declare namespace Commerce.Client.Entities {
    interface IReasonCodeLinesOnCartLine {
        cartLineId: string;
        reasonCodeLines: Proxy.Entities.ReasonCodeLine[];
    }
}
declare namespace Commerce.Client.Entities {
    interface IReceiptEmailResult {
        emailAddress: string;
        saveEmailOnCustomer: boolean;
    }
}
declare namespace Commerce.Client.Entities {
    interface ISalesOrderDetails {
        salesOrder: Proxy.Entities.SalesOrder;
        customerOrderType: string;
        transactionType: string;
        orderStatus: string;
        documentStatus: string;
    }
}
declare namespace Commerce.Client.Entities {
    interface ISessionInfo {
        appSessionId: string;
        userSessionId: string;
    }
}
declare namespace Commerce.Client.Entities {
    interface IStockCountLine {
        originalLine: Proxy.Entities.StockCountJournalTransaction;
        recordId: number;
        productRecordId: number;
        itemId: string;
        colorTranslation?: string;
        configurationTranslation?: string;
        sizeTranslation?: string;
        styleTranslation?: string;
        warehouseLocationId?: string;
        itemName: string;
        counted: number;
        quantity: number;
        dataAreaId: string;
        userId: string;
        status: Proxy.Entities.StockCountStatus;
        product: Proxy.Entities.SimpleProduct;
    }
}
declare namespace Commerce.Client.Entities {
    interface ISuspendedCart {
        cart: Proxy.Entities.Cart;
        customer?: Proxy.Entities.Customer;
        suspendedCart: Proxy.Entities.SuspendedCart;
    }
}
declare namespace Commerce.Client.Entities {
    enum ShowJournalMode {
        ShowJournal = 0,
        CustomerSalesOrders = 1,
        SingleCustomerSalesOrder = 2
    }
}
declare namespace Commerce.Client.Entities.Dialogs {
    interface IAlphanumericInputDialogOptions extends IInputDialogOptions<IAlphanumericInputDialogResult> {
        numPadLabel: string;
        defaultValue?: string;
        enableMagneticStripReader?: boolean;
        enableBarcodeScanner?: boolean;
    }
}
declare namespace Commerce.Client.Entities.Dialogs {
    interface IAlphanumericInputDialogResult extends IInputDialogResult<string> {
    }
}
declare namespace Commerce.Client.Entities.Dialogs {
    interface IDialogButton {
        id: string;
        label: string;
        ariaLabel?: string;
        isPrimary?: boolean;
    }
}
declare namespace Commerce.Client.Entities.Dialogs {
    interface IDialogClickButton extends IDialogButton {
        onClick: (button: IDialogButton) => boolean;
    }
}
declare namespace Commerce.Client.Entities.Dialogs {
    interface IDialogOptions<T extends IDialogButton> {
        title?: string;
        subTitle?: string;
        button1?: T;
        button2?: T;
    }
}
declare namespace Commerce.Client.Entities.Dialogs {
    interface IDialogResultButton extends IDialogButton {
        result: string;
    }
}
declare namespace Commerce.Client.Entities.Dialogs {
    interface IInputDialogOptions<TResult> {
        title?: string;
        subTitle?: string;
        onBeforeClose?: (result: ICancelableDataResult<TResult>) => Promise<void>;
    }
}
declare namespace Commerce.Client.Entities.Dialogs {
    interface IInputDialogResult<T> {
        value: T;
    }
}
declare namespace Commerce.Client.Entities.Dialogs {
    interface IListInputDialogItem {
        label: string;
        value: any;
    }
}
declare namespace Commerce.Client.Entities.Dialogs {
    interface IListInputDialogOptions extends IInputDialogOptions<IListInputDialogResult> {
        items: IListInputDialogItem[];
    }
}
declare namespace Commerce.Client.Entities.Dialogs {
    interface IListInputDialogResult extends IInputDialogResult<IListInputDialogItem> {
    }
}
declare namespace Commerce.Client.Entities.Dialogs {
    interface IMessageDialogOptions extends IDialogOptions<IDialogResultButton> {
        showCloseX?: boolean;
        message: string;
    }
}
declare namespace Commerce.Client.Entities.Dialogs {
    interface IMessageDialogResult {
        dialogResult: string;
    }
}
declare namespace Commerce.Client.Entities.Dialogs {
    interface INumericInputDialogOptions extends IInputDialogOptions<INumericInputDialogResult> {
        numPadLabel: string;
        defaultNumber?: string;
        decimalPrecision?: number;
    }
}
declare namespace Commerce.Client.Entities.Dialogs {
    interface INumericInputDialogResult extends IInputDialogResult<string> {
    }
}
declare namespace Commerce.Client.Entities.Dialogs {
    interface ITemplatedDialogOptions extends IDialogOptions<IDialogClickButton> {
        onCloseX?: () => boolean;
    }
}
declare namespace Commerce.Client.Entities.Dialogs {
    interface ITextInputDialogOptions extends IInputDialogOptions<ITextInputDialogResult> {
        label?: string;
        defaultText?: string;
    }
}
declare namespace Commerce.Client.Entities.Dialogs {
    interface ITextInputDialogResult extends IInputDialogResult<string> {
    }
}
declare namespace Commerce.Client.Entities {
    class ShowInputDialogError<T> extends Client.Entities.ExtensionError {
        readonly newDialogValue: T;
        constructor(errorMessage: string, newDialogValue?: T);
    }
}
declare namespace Commerce.Client.Entities {
    class ShowAlphanumericInputDialogError extends Client.Entities.ShowInputDialogError<string> {
        constructor(errorMessage: string, newDialogValue?: string);
    }
}
declare namespace Commerce.Client.Entities {
    class ShowListInputDialogError extends Client.Entities.ShowInputDialogError<Dialogs.IListInputDialogItem[]> {
        constructor(errorMessage: string, newDialogValue?: Dialogs.IListInputDialogItem[]);
    }
}
declare namespace Commerce.Client.Entities {
    class ShowNumericInputDialogError extends Client.Entities.ShowInputDialogError<string> {
        constructor(errorMessage: string, newDialogValue?: string);
    }
}
declare namespace Commerce.Client.Entities {
    class ShowTextInputDialogError extends Client.Entities.ShowInputDialogError<string> {
        constructor(errorMessage: string, newDialogValue?: string);
    }
}
declare namespace Commerce.Client.Entities {
    abstract class NavigationParameters {
        readonly correlationId: string;
        constructor(correlationId: string);
        protected static generateCorrelationId(): string;
    }
}
declare namespace Commerce.Client.Entities {
    class CartViewNavigationParameters extends NavigationParameters {
        constructor(correlationId?: string);
    }
}
declare namespace Commerce.Client.Entities {
    class CustomerDetailsNavigationParameters extends NavigationParameters {
        readonly accountNumber: string;
        constructor(accountNumber: string, correlationId?: string);
    }
}
declare namespace Commerce.Client.Entities {
    class HomeViewNavigationParameters extends NavigationParameters {
    }
}
declare namespace Commerce.Client.Entities {
    class InventoryLookupNavigationParameters extends NavigationParameters {
        readonly product?: Proxy.Entities.SimpleProduct;
        constructor(correlationId: string, product?: Proxy.Entities.SimpleProduct);
    }
}
declare namespace Commerce.Client.Entities {
    enum SearchViewSearchEntity {
        Product = 0,
        Customer = 1
    }
    class SearchNavigationParameters extends NavigationParameters {
        readonly searchEntity: SearchViewSearchEntity;
        readonly searchText: string;
        constructor(searchEntity: SearchViewSearchEntity, searchText?: string, correlationId?: string);
    }
}
declare namespace Commerce.Client.Entities {
    class SearchOrdersNavigationParameters extends NavigationParameters {
        readonly searchCriteria?: Proxy.Entities.OrderSearchCriteria;
        constructor(correlationId: string, searchCriteria?: Proxy.Entities.OrderSearchCriteria);
    }
}
declare namespace Commerce.Client.Entities {
    class SimpleProductDetailsNavigationParameters extends NavigationParameters {
        readonly productId: number;
        constructor(productId: number, correlationId?: string);
    }
}
declare namespace Commerce.Client.Entities {
    interface ICardInfo {
        CardTypeId?: string;
        CardNumber?: string;
        FirstName?: string;
        LastName?: string;
        ExpirationMonth?: number;
        ExpirationYear?: number;
        Track1?: string;
        Track2?: string;
        Track3?: string;
        EncryptedPin?: string;
        AdditionalSecurityData?: string;
        CashBackAmount?: number;
        DigitalSignature?: string;
        CCID?: string;
        VoiceAuthorizationCode?: string;
        Address1?: string;
        Zip?: string;
    }
}
declare namespace Commerce.Client.Entities {
    interface IExtensionTransaction extends IExtensionTransactionBase {
    }
}
declare namespace Commerce.Client.Entities {
    interface IExtensionTransactionBase {
        ExtensionProperties: Proxy.Entities.CommerceProperty[];
    }
}
declare namespace Commerce.Proxy.Entities {
    interface IHardwareStation {
        recordId: number;
        url: string;
        profileId: string;
        eftTerminalId: string;
        hardwareConfigurations?: HardwareConfigurations;
        description: string;
    }
}
declare namespace Commerce.Client.Entities {
    interface IPaymentInfo {
        CardNumberMasked: string;
        CardType: Proxy.Entities.CardType;
        SignatureData: string;
        PaymentSdkData: string;
        AvailableBalanceAmount: number;
        CashbackAmount: number;
        ApprovedAmount: number;
        IsApproved: boolean;
        Errors?: Proxy.Entities.PaymentError[];
        PaymentSdkContentType?: PaymentSdkContentType;
    }
    enum PaymentSdkContentType {
        Authorization = 0,
        AuthorizationAndCardToken = 1,
        CardToken = 2
    }
}
declare namespace Commerce.Client.Entities {
    interface IPaymentTransactionReferenceData {
        Command: string;
        IdFromConnector: string;
        InitiatedDate: Date;
        UniqueTransactionId: string;
        Amount: number;
    }
}
declare namespace Commerce.Client.Entities {
    interface IPeripheralConfiguration extends IExtensionTransactionBase {
    }
}
declare namespace Commerce.Client.Entities {
    interface ITenderInfo {
        TenderId: string;
        CardTypeId?: string;
        CardNumber?: string;
        Track1?: string;
        Track2?: string;
        Track3?: string;
        EncryptedPin?: string;
        AdditionalSecurityData?: string;
        CashbackAmount?: number;
        CCID?: string;
        VoiceAuthorizationCode?: string;
        IsSwipe?: boolean;
        Name?: string;
        Country?: string;
        Address?: string;
        Zip?: string;
        ExpirationMonth?: number;
        ExpirationYear?: number;
    }
}

declare namespace Commerce {
    interface IDisposable {
        dispose(): void;
    }
    class ObjectExtensions {
        private static DISPOSED_FLAG;
        static isNull(object: any): boolean;
        static isUndefined(object: any): boolean;
        static isOfType(object: any, type: any): boolean;
        static isNullOrUndefined(object: any): boolean;
        static isFunction(object: any): boolean;
        static isObject(variable: any): boolean;
        static isNumber(variable: any): variable is number;
        static isString(variable: any): boolean;
        static isBoolean(variable: any): variable is boolean;
        static clone<T>(origObject: T): T;
        static forEachKeyValuePair<TValue>(object: any, iterator: (key: string, value: TValue) => boolean | void): void;
        static groupBy<T>(inputArray: T[], keySelector: (value: T) => any): T[][];
        static tryDispose(disposableObject: IDisposable): boolean;
        static disposeAllProperties(obj: IDisposable): void;
        private static safeClone;
        private static extend;
        private static copyOverKeysWithUndefinedValues;
    }
}
declare namespace Commerce {
    interface IEqualityComparer<T> {
        (left: T, right: T): boolean;
    }
    class ArrayExtensions {
        static hasElements(array: any[]): boolean;
        static hasElement<T>(array: T[], element: T, equalityComparer?: IEqualityComparer<T>): boolean;
        static distinct<T>(array: T[], equalityComparer?: IEqualityComparer<T>): T[];
        static difference<T>(left: T[], right: T[], equalityComparer?: IEqualityComparer<T>): T[];
        static firstOrUndefined<T>(array: T[], predicate?: (element: T) => boolean): T;
        static lastOrUndefined<T>(array: T[], predicate?: (element: T) => boolean): T;
        static findIndex<T>(array: T[], predicate: (element: T, index: number, array: T[]) => boolean): number;
        static sum<T>(array: T[], selector: (element: T) => number, predicate?: (element: T) => boolean): number;
        private static _differenceOrIntersect;
        private static _getDefaultEqualityComparer;
        private static _getEqualityComparer;
    }
}
declare namespace Commerce {
    class DateExtensions {
        static setTimeToLastSecondOfDay(date: Date): void;
        static isTodayOrFutureDate(date: Date): boolean;
        static isFutureDate(date: Date): boolean;
        static isTodayDate(date: Date): boolean;
        static getDate(dateTime?: Date): Date;
        static addDays(dateTime: Date, days: number): Date;
        static readonly now: Date;
        static areEqual(left: Date, right: Date): boolean;
        static getMinDate(): Date;
        static isValidDate(object: any): boolean;
    }
}
declare namespace Commerce {
    class EnumExtensions {
        static getValues(e: any): number[];
        private static getObjValues;
    }
}
declare namespace Commerce {
    class StringExtensions {
        static readonly EMPTY: string;
        static readonly NEW_LINE: string;
        static isEmpty(object: string): boolean;
        static isEmptyOrWhitespace(object: string): boolean;
        static isNullOrWhitespace(object: string): boolean;
        static padLeft(str: string, padString: string, length: number): string;
        static padRight(str: string, padString: string, length: number): string;
        static format(object: string, ...params: any[]): string;
        static compare(object: string, comparisonObject: string, ignoreCase?: boolean): number;
        static replaceAll(txt: string, txtToReplace: string, valueToReplaceWith: string): string;
        static cleanUri(uri: string): string;
        static beginsWith(str: string, prefix: string, caseSensitive?: boolean): boolean;
        static endsWith(str: string, suffix: string, caseSensitive?: boolean): boolean;
        static formattedJoin(stringArray: string[], formatString: string): string;
    }
}

declare namespace Commerce {
    class Response {
        private _responseId;
        constructor();
        readonly responseId: string;
    }
}
declare namespace Commerce {
    abstract class Request<TResponse extends Response> {
        readonly correlationId: string;
        protected _t: TResponse;
        private _requestId;
        constructor(correlationId: string);
        readonly requestId: string;
    }
    type AbstractRequestType<TResponse extends Response> = {
        prototype: Request<TResponse>;
    };
    type RequestType<TResponse extends Response> = {
        new (...args: any[]): Request<TResponse>;
    } & AbstractRequestType<TResponse>;
}
declare namespace Commerce.DataService {
    abstract class DataServiceRequest<TResponse extends Response> extends Request<TResponse> {
        locale: string;
        top: number;
        skip: number;
        inlineCount: boolean;
        protected _entitySet: string;
        protected _entityType: string;
        protected _keys: any;
        protected _method: string;
        protected _parameters: any;
        protected _isAction: boolean;
        protected _returnType: any;
        protected _isReturnTypeCollection: boolean;
        constructor(correlationId?: string);
        readonly entitySet: string;
        readonly entityType: string;
        readonly keys: any;
        readonly method: string;
        readonly parameters: any;
        readonly isAction: boolean;
        readonly returnType: any;
        readonly isReturnTypeCollection: boolean;
    }
}
declare namespace Commerce.DataService {
    class DataServiceResponse extends Response {
        constructor();
    }
}
declare namespace Commerce.Extensibility {
    enum CustomGridColumnAlignment {
        Left = 0,
        Right = 1
    }
    interface ICustomGridColumn<T> {
        title: () => string;
        computeValue: (data: T) => string;
        alignment: () => CustomGridColumnAlignment;
    }
}
declare namespace Commerce.Extensibility {
    interface ICustomGridItemSubfield<T> {
        computeValue: (data: T) => string;
    }
}
declare namespace Commerce.Extensibility {
    interface IExtensionPackageConfig {
        baseUrl: string;
    }
    interface IExtensionPackageInfo extends IExtensionPackageConfig {
        id: string;
        name: string;
        version: string;
        publisher: string;
        description: string;
    }
}
declare namespace Commerce.Client.Entities {
    type ExtensibleEnumerationByNameGetter = (typeName: string, valueName: string) => Proxy.Entities.ExtensibleEnumeration;
    type ExtensibleEnumerationByValueGetter = (typeName: string, value: number) => Proxy.Entities.ExtensibleEnumeration;
    abstract class ExtensibleEnumerationBase implements Proxy.Entities.ExtensibleEnumeration {
        private static _getExtensibleEnumerationByName;
        private static _getExtensibleEnumerationByValue;
        protected abstract readonly TypeName: string;
        static extensibleEnumerationByNameGetter: ExtensibleEnumerationByNameGetter;
        static extensibleEnumerationByValueGetter: ExtensibleEnumerationByValueGetter;
        static getValues(): Proxy.Entities.ExtensibleEnumeration[];
        abstract readonly Name: string;
        readonly Value: number;
        equals<T extends Proxy.Entities.ExtensibleEnumeration>(value: T): boolean;
        equals(value: number): boolean;
        protected static getByValueUtility(typeName: string, value: number): Proxy.Entities.ExtensibleEnumeration;
        protected static getByNameUtility(typeName: string, name: string): Proxy.Entities.ExtensibleEnumeration;
        private equalsEnum;
        private equalsValue;
    }
}
declare namespace Commerce.Client.Entities {
    class CustomerSearchFieldType extends ExtensibleEnumerationBase implements Proxy.Entities.CustomerSearchFieldType {
        static readonly AccountNumber: CustomerSearchFieldType;
        static readonly Address: CustomerSearchFieldType;
        static readonly Default: CustomerSearchFieldType;
        static readonly Email: CustomerSearchFieldType;
        static readonly LoyaltyCardNumber: CustomerSearchFieldType;
        static readonly Name: CustomerSearchFieldType;
        static readonly PhoneNumber: CustomerSearchFieldType;
        private static readonly _typeName;
        private readonly _valueName;
        protected constructor(name: string);
        protected readonly TypeName: string;
        readonly Name: string;
        static getByValue(value: number): Proxy.Entities.CustomerSearchFieldType;
        static getByName(name: string): Proxy.Entities.CustomerSearchFieldType;
    }
}
declare namespace Commerce.Client.Entities {
    class ExtensibleAddressType extends ExtensibleEnumerationBase implements Proxy.Entities.ExtensibleAddressType {
        static readonly None: ExtensibleAddressType;
        static readonly Invoice: ExtensibleAddressType;
        static readonly Delivery: ExtensibleAddressType;
        static readonly AltDlv: ExtensibleAddressType;
        static readonly SWIFT: ExtensibleAddressType;
        static readonly Payment: ExtensibleAddressType;
        static readonly Service: ExtensibleAddressType;
        static readonly Home: ExtensibleAddressType;
        static readonly Other: ExtensibleAddressType;
        static readonly Business: ExtensibleAddressType;
        static readonly RemitTo: ExtensibleAddressType;
        static readonly ShipCarrierThirdPartyShipping: ExtensibleAddressType;
        static readonly Statement: ExtensibleAddressType;
        static readonly FixedAsset: ExtensibleAddressType;
        static readonly Onetime: ExtensibleAddressType;
        static readonly Recruit: ExtensibleAddressType;
        static readonly SMS: ExtensibleAddressType;
        static readonly Lading_W: ExtensibleAddressType;
        static readonly Unlading_W: ExtensibleAddressType;
        static readonly Consignment_IN: ExtensibleAddressType;
        private static readonly _typeName;
        private readonly _valueName;
        protected constructor(name: string);
        protected readonly TypeName: string;
        readonly Name: string;
        static getByValue(value: number): Proxy.Entities.ExtensibleAddressType;
    }
}
declare namespace Commerce.Client.Entities {
    class ExtensibleAuditEventType extends ExtensibleEnumerationBase implements Proxy.Entities.ExtensibleAuditEventType {
        static readonly Unknown: ExtensibleAuditEventType;
        static readonly UserLogOn: ExtensibleAuditEventType;
        static readonly UserLogOff: ExtensibleAuditEventType;
        static readonly ManagerOverride: ExtensibleAuditEventType;
        static readonly ItemVoid: ExtensibleAuditEventType;
        static readonly TransactionVoid: ExtensibleAuditEventType;
        static readonly PrintReceiptCopy: ExtensibleAuditEventType;
        static readonly PriceCheck: ExtensibleAuditEventType;
        static readonly TaxOverride: ExtensibleAuditEventType;
        static readonly QuantityCorrection: ExtensibleAuditEventType;
        static readonly PurgeTransactionsData: ExtensibleAuditEventType;
        private static readonly _typeName;
        private readonly _valueName;
        protected constructor(name: string);
        protected readonly TypeName: string;
        readonly Name: string;
        static getByValue(value: number): Proxy.Entities.ExtensibleAuditEventType;
    }
}
declare namespace Commerce.Client.Entities {
    class ExtensibleLoyaltyRewardPointActivityEntryType extends ExtensibleEnumerationBase implements Proxy.Entities.ExtensibleLoyaltyRewardPointActivityEntryType {
        static readonly Earned: ExtensibleLoyaltyRewardPointActivityEntryType;
        static readonly Returned: ExtensibleLoyaltyRewardPointActivityEntryType;
        static readonly Redeemed: ExtensibleLoyaltyRewardPointActivityEntryType;
        static readonly Refunded: ExtensibleLoyaltyRewardPointActivityEntryType;
        static readonly Adjusted: ExtensibleLoyaltyRewardPointActivityEntryType;
        static readonly Expired: ExtensibleLoyaltyRewardPointActivityEntryType;
        static readonly Pending: ExtensibleLoyaltyRewardPointActivityEntryType;
        static readonly Expiring: ExtensibleLoyaltyRewardPointActivityEntryType;
        private static readonly _typeName;
        private readonly _valueName;
        protected constructor(name: string);
        protected readonly TypeName: string;
        readonly Name: string;
        static getByValue(value: number): Proxy.Entities.ExtensibleLoyaltyRewardPointActivityEntryType;
    }
}
declare namespace Commerce.Client.Entities {
    class ExtensibleSalesTransactionType extends ExtensibleEnumerationBase implements Proxy.Entities.ExtensibleSalesTransactionType {
        static readonly AsyncCustomerOrder: ExtensibleSalesTransactionType;
        static readonly AsyncCustomerQuote: ExtensibleSalesTransactionType;
        static readonly CustomerOrder: ExtensibleSalesTransactionType;
        static readonly IncomeExpense: ExtensibleSalesTransactionType;
        static readonly Payment: ExtensibleSalesTransactionType;
        static readonly PendingSalesOrder: ExtensibleSalesTransactionType;
        static readonly Sales: ExtensibleSalesTransactionType;
        private static readonly _typeName;
        private readonly _valueName;
        protected constructor(name: string);
        protected readonly TypeName: string;
        readonly Name: string;
        static getByValue(value: number): Proxy.Entities.ExtensibleSalesTransactionType;
    }
}
declare namespace Commerce.Client.Entities {
    class ExtensibleTransactionType extends ExtensibleEnumerationBase implements Proxy.Entities.ExtensibleTransactionType {
        static readonly Logoff: ExtensibleTransactionType;
        static readonly Logon: ExtensibleTransactionType;
        static readonly Sales: ExtensibleTransactionType;
        static readonly Payment: ExtensibleTransactionType;
        static readonly RemoveTender: ExtensibleTransactionType;
        static readonly FloatEntry: ExtensibleTransactionType;
        static readonly ChangeTender: ExtensibleTransactionType;
        static readonly TenderDeclaration: ExtensibleTransactionType;
        static readonly OpenDrawer: ExtensibleTransactionType;
        static readonly SalesOrder: ExtensibleTransactionType;
        static readonly SalesInvoice: ExtensibleTransactionType;
        static readonly BankDrop: ExtensibleTransactionType;
        static readonly SafeDrop: ExtensibleTransactionType;
        static readonly IncomeExpense: ExtensibleTransactionType;
        static readonly CustomerOrder: ExtensibleTransactionType;
        static readonly StartingAmount: ExtensibleTransactionType;
        static readonly SuspendShift: ExtensibleTransactionType;
        static readonly SuspendedTransaction: ExtensibleTransactionType;
        static readonly BlindCloseShift: ExtensibleTransactionType;
        static readonly CloseShift: ExtensibleTransactionType;
        static readonly PrintX: ExtensibleTransactionType;
        static readonly PrintZ: ExtensibleTransactionType;
        static readonly PendingSalesOrder: ExtensibleTransactionType;
        static readonly KitDisassembly: ExtensibleTransactionType;
        static readonly AsyncCustomerQuote: ExtensibleTransactionType;
        static readonly AsyncCustomerOrder: ExtensibleTransactionType;
        private static readonly _typeName;
        private readonly _valueName;
        protected constructor(name: string);
        protected readonly TypeName: string;
        readonly Name: string;
        static getByValue(value: number): Proxy.Entities.ExtensibleTransactionType;
    }
}
declare namespace Commerce.Client.Entities {
    class FulfillmentLineDeliveryType extends ExtensibleEnumerationBase implements Proxy.Entities.FulfillmentLineDeliveryType {
        static readonly All: FulfillmentLineDeliveryType;
        static readonly StorePickup: FulfillmentLineDeliveryType;
        static readonly StoreShipping: FulfillmentLineDeliveryType;
        private static readonly _typeName;
        private readonly _valueName;
        protected constructor(name: string);
        protected readonly TypeName: string;
        readonly Name: string;
        static getByValue(value: number): Proxy.Entities.FulfillmentLineDeliveryType;
    }
}
declare namespace Commerce.Client.Entities {
    class FulfillmentLineStatus extends ExtensibleEnumerationBase implements Proxy.Entities.FulfillmentLineStatus {
        static readonly Unknown: FulfillmentLineStatus;
        static readonly Pending: FulfillmentLineStatus;
        static readonly Accepted: FulfillmentLineStatus;
        static readonly Picking: FulfillmentLineStatus;
        static readonly PartiallyPicked: FulfillmentLineStatus;
        static readonly Picked: FulfillmentLineStatus;
        static readonly PartiallyPacked: FulfillmentLineStatus;
        static readonly Packed: FulfillmentLineStatus;
        static readonly PartiallyInvoiced: FulfillmentLineStatus;
        static readonly Invoiced: FulfillmentLineStatus;
        static readonly Rejected: FulfillmentLineStatus;
        private static readonly _typeName;
        private readonly _valueName;
        protected constructor(name: string);
        protected readonly TypeName: string;
        readonly Name: string;
        static getByValue(value: number): Proxy.Entities.FulfillmentLineStatus;
    }
}
declare namespace Commerce.ExtensibleEnumerations {
    interface IExtensibleEnumerationManager {
        getExtensibleEnumerationByName(typeName: string, valueName: string): Proxy.Entities.ExtensibleEnumeration;
        getExtensibleEnumerationByValue(typeName: string, value: number): Proxy.Entities.ExtensibleEnumeration;
    }
}
declare namespace Commerce.Messaging {
    interface IInboundMessagePortEndpoint<InboundMessageTypeMap> extends IDisposable {
        addMessageHandler<MKey extends keyof InboundMessageTypeMap>(messageType: MKey, handler: (data: InboundMessageTypeMap[MKey]) => void): IDisposable;
        start(): void;
        close(): void;
    }
}
declare namespace Commerce.Messaging {
    interface IMessageChannelEndpoint<OutboundTypeMap, InboundTypeMap> extends IOutboundMessagePortEndpoint<OutboundTypeMap>, IInboundMessagePortEndpoint<InboundTypeMap> {
    }
}
declare namespace Commerce.Messaging {
    interface IOutboundMessagePortEndpoint<OutboundMessageTypeMap> extends IDisposable {
        sendMessage<MKey extends keyof OutboundMessageTypeMap>(messageType: MKey, data: OutboundMessageTypeMap[MKey]): void;
    }
}
declare namespace Commerce.Peripherals {
    interface INumPadInputBroker extends INumPadInputSubscriber, INumPadInputPublisher {
    }
    interface INumPadContainer {
        captureGlobalInputForNumPad: boolean;
        numPadInputBroker: INumPadInputBroker;
    }
}
declare namespace Commerce.Peripherals {
    interface INumPadInputSubscriber {
        subscribe(listener: (event: KeyboardEvent) => boolean): void;
        unsubscribe(listener: (event: KeyboardEvent) => boolean): void;
    }
    interface INumPadInputPublisher {
        publish(event: KeyboardEvent): boolean;
    }
    class NumPadInputBroker implements INumPadInputSubscriber, INumPadInputPublisher, IDisposable {
        private _listeners;
        constructor();
        publish(event: KeyboardEvent): boolean;
        subscribe(listener: (event: KeyboardEvent) => boolean): void;
        unsubscribe(listener: (event: KeyboardEvent) => boolean): void;
        dispose(): void;
    }
}
declare namespace Commerce {
    interface IInterceptor<TInterceptee, TIntercepteeResult> {
        onInterceptingAsync?(interceptee: TInterceptee): Promise<Client.Entities.ICancelable>;
        onInterceptedAsync?(interceptee: TInterceptee, result: TIntercepteeResult): Promise<void>;
    }
}
declare namespace Commerce {
    type RequestInterceptorResult<TResponse extends Response> = Client.Entities.ICancelableDataResult<TResponse> | Array<Error>;
    interface IRequestInterceptor<TResponse extends Response> extends IInterceptor<Request<TResponse>, RequestInterceptorResult<TResponse>> {
    }
}
declare namespace Commerce {
    interface ICompositionLoader {
        getRequestHandler<TResponse extends Response>(request: Request<TResponse>): RequestHandler<TResponse>;
        getRequestHandlers<TResponse extends Response>(request: Request<TResponse>): RequestHandler<TResponse>[];
        getRequestHandlersForRequestType<TResponse extends Response>(requestType: AbstractRequestType<TResponse>): RequestHandler<TResponse>[];
        getAllRequestHandlers<TResponse extends Response>(): RequestHandler<TResponse>[];
        getRequestInterceptors<TResponse extends Response>(request: Request<TResponse>): IRequestInterceptor<TResponse>[];
        getRequestHandlerInterceptors<TResponse extends Response>(request: Request<TResponse>): IRequestInterceptor<TResponse>[];
    }
}
declare namespace Commerce {
    interface IInterceptorConfiguration {
    }
}
declare namespace Commerce {
    interface IRequestConfiguration {
        interceptor: IInterceptorConfiguration;
    }
}
declare namespace Commerce {
    interface IRequestHandlerConfiguration {
        interceptor: IInterceptorConfiguration;
    }
}
declare namespace Commerce {
    interface IRuntimeConfiguration {
        compositionLoader: ICompositionLoader;
        interceptor: IInterceptorConfiguration;
        request: IRequestConfiguration;
        requestHandler: IRequestHandlerConfiguration;
    }
}
declare namespace Commerce {
    interface IRuntime {
        executeAsync<TResponse extends Response>(request: Request<TResponse>): Promise<Client.Entities.ICancelableDataResult<TResponse>>;
    }
}
declare namespace Commerce {
    abstract class RequestHandler<TResponse extends Response> {
        abstract supportedRequestType(): AbstractRequestType<TResponse>;
        abstract executeAsync(request: Request<TResponse>): Promise<Client.Entities.ICancelableDataResult<TResponse>>;
    }
    type AbstractRequestHandlerType<TResponse extends Response> = {
        prototype: RequestHandler<TResponse>;
    };
    type RequestHandlerType<TResponse extends Response> = {
        new (): RequestHandler<TResponse>;
    } & AbstractRequestHandlerType<TResponse>;
}
declare namespace Commerce.Triggers {
    interface ITriggerOptions {
    }
    abstract class Trigger {
        abstract execute(options: ITriggerOptions): Promise<Client.Entities.ICancelable | void>;
    }
}
declare namespace Commerce.Triggers {
    interface IApplicationStartTriggerOptions extends ITriggerOptions {
    }
    interface IApplicationSuspendTriggerOptions extends ITriggerOptions {
    }
    interface IPostConnectionStatusChangeTriggerOptions extends ITriggerOptions {
        connectionStatus: Client.Entities.ConnectionStatusType;
        previousConnectionStatus: Client.Entities.ConnectionStatusType;
    }
    interface IPreLogOnTriggerOptions extends ITriggerOptions {
        operatorId: string;
    }
    interface IPostLogOnTriggerOptions extends ITriggerOptions {
        employee: Proxy.Entities.Employee;
    }
    interface IPostLogOffTriggerOptions extends ITriggerOptions {
        employee: Proxy.Entities.Employee;
        wasSilent?: boolean;
    }
    interface ILockTerminalTriggerOptions extends ITriggerOptions {
        correlationId: string;
        currentEmployee: Proxy.Entities.Employee;
    }
    interface IPreLockTerminalTriggerOptions extends ILockTerminalTriggerOptions {
    }
    interface IPostLockTerminalTriggerOptions extends ILockTerminalTriggerOptions {
    }
    interface IPostDeviceActivationTriggerOptions extends ITriggerOptions {
        operatorId: string;
        registerId: string;
        storeId: string;
    }
}
declare namespace Commerce.Triggers {
    interface IPreRegisterAuditEventTriggerOptions extends ITriggerOptions {
        auditEvent: Proxy.Entities.AuditEvent;
    }
    interface IPostRegisterAuditEventTriggerOptions extends ITriggerOptions {
        auditEvent: Proxy.Entities.AuditEvent;
    }
}
declare namespace Commerce.Triggers {
    interface ITenderDeclarationTriggerOptions extends ITriggerOptions {
        shift: Proxy.Entities.Shift;
    }
    interface IPreTenderDeclarationTriggerOptions extends ITenderDeclarationTriggerOptions {
    }
    interface IPostTenderDeclarationTriggerOptions extends ITenderDeclarationTriggerOptions {
        transaction: Proxy.Entities.DropAndDeclareTransaction;
    }
    interface IFloatEntryTriggerOptions extends ITriggerOptions {
        shift: Proxy.Entities.Shift;
    }
    interface IPreFloatEntryTriggerOptions extends IFloatEntryTriggerOptions {
    }
    interface IPostFloatEntryTriggerOptions extends IFloatEntryTriggerOptions {
        transaction: Proxy.Entities.NonSalesTransaction;
    }
}
declare namespace Commerce.Triggers {
    interface ICustomerTriggerOptions extends ITriggerOptions {
        cart: Proxy.Entities.Cart;
    }
    interface IPreCustomerAddTriggerOptions extends ICustomerTriggerOptions {
    }
    interface IPostCustomerAddTriggerOptions extends ICustomerTriggerOptions {
        customer: Proxy.Entities.Customer;
    }
    interface ICustomerClearTriggerOptions extends ICustomerTriggerOptions {
    }
    interface IPreCustomerSetTriggerOptions extends ICustomerTriggerOptions {
        customerId: string;
    }
    interface IPreCustomerSearchTriggerOptions extends ICustomerTriggerOptions {
        searchText: string;
        searchFieldCriteria?: Proxy.Entities.CustomerSearchByFieldCriteria;
    }
    interface IPostCustomerSearchTriggerOptions extends ICustomerTriggerOptions {
        customers: Proxy.Entities.GlobalCustomer[];
    }
    interface IPreGetLoyaltyCardBalanceTriggerOptions extends ITriggerOptions {
        loyaltyCardId?: string;
    }
    interface IPreDisplayLoyaltyCardBalanceTriggerOptions extends ITriggerOptions {
        loyaltyCard: Proxy.Entities.LoyaltyCard;
    }
    interface IPostGetLoyaltyCardBalanceTriggerOptions extends ITriggerOptions {
        loyaltyCard: Proxy.Entities.LoyaltyCard;
    }
    interface ICustomerSaveTriggerOptions extends ITriggerOptions {
        customer: Proxy.Entities.Customer;
        isNewCustomer: boolean;
    }
    interface IPreCustomerSaveTriggerOptions extends ICustomerSaveTriggerOptions {
    }
    interface IPostCustomerSaveTriggerOptions extends ICustomerSaveTriggerOptions {
    }
}
declare namespace Commerce.Triggers {
    interface IDiscountTriggerOptions extends ITriggerOptions {
        cart: Proxy.Entities.Cart;
    }
    interface ILineDiscountTriggerOptions extends IDiscountTriggerOptions {
        cartLines: Proxy.Entities.CartLine[];
    }
    interface IAddCouponTriggerOptions extends ITriggerOptions {
        couponCode: string;
        operationId: Proxy.Entities.RetailOperation;
    }
    interface IPreAddCouponTriggerOptions extends IAddCouponTriggerOptions {
    }
    interface IPostAddCouponTriggerOptions extends IAddCouponTriggerOptions {
    }
    interface IPreLineDiscountTriggerOptions extends ILineDiscountTriggerOptions {
    }
    interface IPostLineDiscountTriggerOptions extends ILineDiscountTriggerOptions {
    }
    interface IPreTotalDiscountTriggerOptions extends IDiscountTriggerOptions {
    }
    interface IPostTotalDiscountTriggerOptions extends IDiscountTriggerOptions {
    }
}
declare namespace Commerce.Triggers {
    interface IOperationTriggerOptions extends ITriggerOptions {
        operationRequest: OperationRequest<Response>;
    }
    interface IPostOperationTriggerOptions extends IOperationTriggerOptions {
        operationResponse: Response;
    }
    interface IOperationFailureTriggerOptions extends IOperationTriggerOptions {
        errors: Error[];
    }
}
declare namespace Commerce.Triggers {
    interface IPaymentTriggerOptions extends ITriggerOptions {
        cart: Proxy.Entities.Cart;
    }
    interface IPreAddTenderLineTriggerOptions extends IPaymentTriggerOptions {
        tenderLine: Proxy.Entities.TenderLine;
    }
    interface IPrePaymentTriggerOptions extends IPaymentTriggerOptions {
        tenderType: Proxy.Entities.TenderType;
    }
    interface IPostPaymentTriggerOptions extends IPaymentTriggerOptions {
        tenderLine: Proxy.Entities.TenderLine;
    }
    interface IPreVoidPaymentTriggerOptions extends IPaymentTriggerOptions {
        tenderLines: Proxy.Entities.TenderLine[];
    }
    interface IPostVoidPaymentTriggerOptions extends IPaymentTriggerOptions {
        tenderLines: Proxy.Entities.TenderLine[];
    }
    interface IPostGetGiftCardNumberTriggerOptions extends IPaymentTriggerOptions {
        giftCardOperation: Client.Entities.GiftCardOperation;
        giftCardNumber: string;
        giftCardEntryType: Client.Entities.GiftCardEntryType;
    }
}
declare namespace Commerce.Triggers {
    interface IPrePrintReceiptCopyTriggerOptions extends ITriggerOptions {
        salesOrder: Proxy.Entities.SalesOrder;
        receiptAndPrinterPairs: {
            receipt: Proxy.Entities.Receipt;
            printer: Proxy.Entities.Printer;
        }[];
    }
    interface IPostReceiptPromptTriggerOptions extends ITriggerOptions {
        shouldPrintReceipt: boolean;
        selectedReceipts: Proxy.Entities.Receipt[];
    }
}
declare namespace Commerce.Triggers {
    interface IProductTriggerOptions extends ITriggerOptions {
        cart: Proxy.Entities.Cart;
    }
    interface IPostGetSerialNumberTriggerOptions extends IProductTriggerOptions {
        product: Proxy.Entities.SimpleProduct;
        serialNumber: string;
    }
    interface IPreProductSaleTriggerOptions extends IProductTriggerOptions {
        productSaleDetails: Client.Entities.IProductSaleReturnDetails[];
    }
    interface IPostProductSaleTriggerOptions extends IProductTriggerOptions {
        productSaleDetails: Client.Entities.IProductSaleReturnDetails[];
    }
    interface IPreReturnProductTriggerOptions extends IProductTriggerOptions {
        cartLinesForReturn: Proxy.Entities.CartLine[];
    }
    interface IPostReturnProductTriggerOptions extends IProductTriggerOptions {
        cartLinesForReturn: Proxy.Entities.CartLine[];
    }
    interface IPreSetQuantityTriggerOptions extends IProductTriggerOptions {
        cartLineQuantities: {
            cartLine: Proxy.Entities.CartLine;
            quantity: number;
        }[];
    }
    interface IPostSetQuantityTriggerOptions extends IProductTriggerOptions {
        cartLines: Proxy.Entities.CartLine[];
    }
    interface IPrePriceOverrideTriggerOptions extends IProductTriggerOptions {
        cartLinePrices: {
            cartLine: Proxy.Entities.CartLine;
            price: number;
        }[];
    }
    interface IPostPriceOverrideTriggerOptions extends IProductTriggerOptions {
        cartLines: Proxy.Entities.CartLine[];
    }
    interface IPreClearQuantityTriggerOptions extends IProductTriggerOptions {
        cartLines: Proxy.Entities.CartLine[];
    }
    interface IPostClearQuantityTriggerOptions extends IProductTriggerOptions {
        cartLines: Proxy.Entities.CartLine[];
    }
    interface IPreVoidProductsTriggerOptions extends IProductTriggerOptions {
        cartLines: Proxy.Entities.CartLine[];
    }
    interface IPostVoidProductsTriggerOptions extends IProductTriggerOptions {
        cartLines: Proxy.Entities.CartLine[];
    }
    interface IPostPriceCheckTriggerOptions extends ITriggerOptions {
        barcodeId?: string;
        customerId?: string;
        product: Proxy.Entities.SimpleProduct;
        productPrice: Proxy.Entities.ProductPrice;
        quantity?: number;
    }
}
declare namespace Commerce.Triggers {
    interface ICustomerOrderTriggerOptions extends ITriggerOptions {
        cart: Proxy.Entities.Cart;
    }
    interface IPreRecallCustomerOrderTriggerOptions extends ICustomerOrderTriggerOptions {
        salesOrderId: string;
    }
    interface IPostRecallCustomerOrderTriggerOptions extends ICustomerOrderTriggerOptions {
    }
    interface IPrePickUpCustomerOrderLinesTriggerOptions extends ICustomerOrderTriggerOptions {
        salesOrder: Proxy.Entities.SalesOrder;
        salesLines: Proxy.Entities.SalesLine[];
    }
    interface IPreChangeShippingOriginTriggerOptions extends ITriggerOptions {
        selectedStore: Proxy.Entities.OrgUnit;
        cartLines: Proxy.Entities.CartLine[];
    }
}
declare namespace Commerce.Triggers {
    interface IPostOpenShiftTriggerOptions extends ITriggerOptions {
        shift: Proxy.Entities.Shift;
    }
}
declare namespace Commerce.Triggers {
    interface ITaxOverrideTriggerOptions extends ITriggerOptions {
        cart: Proxy.Entities.Cart;
        taxOverride: Proxy.Entities.TaxOverride;
    }
    interface ILineTaxOverrideTriggerOptions extends ITaxOverrideTriggerOptions {
        cartLine: Proxy.Entities.CartLine;
    }
    interface IPreOverrideLineProductTaxTriggerOptions extends ILineTaxOverrideTriggerOptions {
    }
    interface IPostOverrideLineProductTaxTriggerOptions extends ILineTaxOverrideTriggerOptions {
    }
    interface IPreOverrideTransactionTaxTriggerOptions extends ITaxOverrideTriggerOptions {
    }
    interface IPostOverrideTransactionTaxTriggerOptions extends ITaxOverrideTriggerOptions {
    }
}
declare namespace Commerce.Triggers {
    interface ITransactionTriggerOptions extends ITriggerOptions {
        cart: Proxy.Entities.Cart;
    }
    interface IBeginTransactionTriggerOptions extends ITransactionTriggerOptions {
    }
    interface IReturnTransactionTriggerOptions extends ITransactionTriggerOptions {
        originalTransaction: Proxy.Entities.SalesOrder;
    }
    interface IPreConfirmReturnTransactionTriggerOptions extends IReturnTransactionTriggerOptions {
        employee: Proxy.Entities.Employee;
        shift: Proxy.Entities.Shift;
    }
    interface IPostReturnTransactionTriggerOptions extends IReturnTransactionTriggerOptions {
        cartLinesForReturn: Proxy.Entities.CartLine[];
    }
    interface IPreReturnTransactionTriggerOptions extends IReturnTransactionTriggerOptions {
        cartLinesForReturn: Proxy.Entities.CartLine[];
    }
    interface IPreEndTransactionTriggerOptions extends ITransactionTriggerOptions {
    }
    interface IPostEndTransactionTriggerOptions extends ITriggerOptions {
        receipts: Proxy.Entities.Receipt[];
    }
    interface IPreVoidTransactionTriggerOptions extends ITransactionTriggerOptions {
    }
    interface IPostVoidTransactionTriggerOptions extends ITransactionTriggerOptions {
    }
    interface IPreSuspendTransactionTriggerOptions extends ITransactionTriggerOptions {
    }
    interface IPostSuspendTransactionTriggerOptions extends ITransactionTriggerOptions {
    }
    interface IPreRecallTransactionTriggerOptions extends ITransactionTriggerOptions {
    }
    interface IPostRecallTransactionTriggerOptions extends ITransactionTriggerOptions {
    }
    interface IPostCartCheckoutTriggerOptions extends ITransactionTriggerOptions {
        salesOrder: Proxy.Entities.SalesOrder;
    }
}
declare namespace Commerce.Triggers {
    interface ITriggerType {
        toString(): string;
    }
    class NonCancelableTriggerType implements ITriggerType {
        static ApplicationStart: NonCancelableTriggerType;
        static ApplicationSuspend: NonCancelableTriggerType;
        static PostConnectionStatusChange: NonCancelableTriggerType;
        static PostLogOff: NonCancelableTriggerType;
        static PostLogOn: NonCancelableTriggerType;
        static PostLockTerminal: NonCancelableTriggerType;
        static PostDeviceActivation: NonCancelableTriggerType;
        static PostRegisterAuditEvent: NonCancelableTriggerType;
        static PostTenderDeclaration: NonCancelableTriggerType;
        static PostFloatEntry: NonCancelableTriggerType;
        static PostCustomerAdd: NonCancelableTriggerType;
        static PostCustomerClear: NonCancelableTriggerType;
        static PostCustomerSave: NonCancelableTriggerType;
        static PostCustomerSearch: NonCancelableTriggerType;
        static PostGetLoyaltyCardBalance: NonCancelableTriggerType;
        static PostAddCoupon: NonCancelableTriggerType;
        static PostLineDiscountAmount: NonCancelableTriggerType;
        static PostLineDiscountPercent: NonCancelableTriggerType;
        static PostTotalDiscountAmount: NonCancelableTriggerType;
        static PostTotalDiscountPercent: NonCancelableTriggerType;
        static OperationFailure: NonCancelableTriggerType;
        static PostOperation: NonCancelableTriggerType;
        static PostPayment: NonCancelableTriggerType;
        static PostVoidPayment: NonCancelableTriggerType;
        static PostReceiptPrompt: NonCancelableTriggerType;
        static PostClearQuantity: NonCancelableTriggerType;
        static PostPriceOverride: NonCancelableTriggerType;
        static PostProductSale: NonCancelableTriggerType;
        static PostReturnProduct: NonCancelableTriggerType;
        static PostSetQuantity: NonCancelableTriggerType;
        static PostVoidProducts: NonCancelableTriggerType;
        static PostPriceCheck: NonCancelableTriggerType;
        static PostGetSerialNumber: NonCancelableTriggerType;
        static PostOpenShift: NonCancelableTriggerType;
        static PostOverrideLineProductTax: NonCancelableTriggerType;
        static PostOverrideTransactionTax: NonCancelableTriggerType;
        static BeginTransaction: NonCancelableTriggerType;
        static PostEndTransaction: NonCancelableTriggerType;
        static PostRecallTransaction: NonCancelableTriggerType;
        static PostReturnTransaction: NonCancelableTriggerType;
        static PostSuspendTransaction: NonCancelableTriggerType;
        static PostVoidTransaction: NonCancelableTriggerType;
        static PostCartCheckoutTransaction: NonCancelableTriggerType;
        static PostRecallCustomerOrder: NonCancelableTriggerType;
        private _value;
        constructor(value: string);
        toString(): string;
    }
    class CancelableTriggerType implements ITriggerType {
        static PreLogOn: CancelableTriggerType;
        static PreLockTerminal: CancelableTriggerType;
        static PreRegisterAuditEvent: CancelableTriggerType;
        static PreTenderDeclaration: CancelableTriggerType;
        static PreFloatEntry: CancelableTriggerType;
        static PreCustomerAdd: CancelableTriggerType;
        static PreCustomerClear: CancelableTriggerType;
        static PreCustomerSave: CancelableTriggerType;
        static PreCustomerSearch: CancelableTriggerType;
        static PreCustomerSet: CancelableTriggerType;
        static PreGetLoyaltyCardBalance: CancelableTriggerType;
        static PreDisplayLoyaltyCardBalance: CancelableTriggerType;
        static PreAddCoupon: CancelableTriggerType;
        static PreLineDiscountAmount: CancelableTriggerType;
        static PreLineDiscountPercent: CancelableTriggerType;
        static PreTotalDiscountAmount: CancelableTriggerType;
        static PreTotalDiscountPercent: CancelableTriggerType;
        static PreOperation: CancelableTriggerType;
        static PreAddTenderLine: CancelableTriggerType;
        static PrePayment: CancelableTriggerType;
        static PreVoidPayment: CancelableTriggerType;
        static PostGetGiftCardNumber: CancelableTriggerType;
        static PrePrintReceiptCopy: CancelableTriggerType;
        static PreClearQuantity: CancelableTriggerType;
        static PrePriceOverride: CancelableTriggerType;
        static PreProductSale: CancelableTriggerType;
        static PreReturnProduct: CancelableTriggerType;
        static PreSetQuantity: CancelableTriggerType;
        static PreVoidProducts: CancelableTriggerType;
        static PreOverrideLineProductTax: CancelableTriggerType;
        static PreOverrideTransactionTax: CancelableTriggerType;
        static PreConfirmReturnTransaction: CancelableTriggerType;
        static PreEndTransaction: CancelableTriggerType;
        static PreRecallTransaction: CancelableTriggerType;
        static PreReturnTransaction: CancelableTriggerType;
        static PreSuspendTransaction: CancelableTriggerType;
        static PreVoidTransaction: CancelableTriggerType;
        static PrePickUpCustomerOrderLines: CancelableTriggerType;
        static PreRecallCustomerOrder: CancelableTriggerType;
        static PreChangeShippingOrigin: CancelableTriggerType;
        private value;
        constructor(value: string);
        toString(): string;
    }
}
declare namespace Commerce {
    abstract class ClientResponse<TResult> extends Response {
        readonly result: TResult;
        constructor(result: TResult);
    }
}
declare namespace Commerce {
    abstract class ClientRequest<TResponse extends ClientResponse<any>> extends Request<TResponse> {
    }
}
declare namespace Commerce {
    class AddTenderLineToCartClientResponse extends ClientResponse<Proxy.Entities.Cart> {
    }
}
declare namespace Commerce {
    class AddTenderLineToCartClientRequest<TResponse extends AddTenderLineToCartClientResponse> extends ClientRequest<TResponse> {
        readonly tenderLine: Proxy.Entities.CartTenderLine;
        constructor(tenderLine: Proxy.Entities.CartTenderLine, correlationId?: string);
    }
}
declare namespace Commerce {
    abstract class EndTransactionClientResponseBase extends Response {
        readonly salesOrder: Proxy.Entities.SalesOrder;
        constructor(salesOrder: Proxy.Entities.SalesOrder);
    }
}
declare namespace Commerce {
    class ConcludeTransactionClientResponse extends EndTransactionClientResponseBase {
    }
}
declare namespace Commerce {
    abstract class EndTransactionClientRequestBase<TResponse extends EndTransactionClientResponseBase> extends Request<TResponse> {
    }
}
declare namespace Commerce {
    class ConcludeTransactionClientRequest<TResponse extends ConcludeTransactionClientResponse> extends EndTransactionClientRequestBase<TResponse> {
    }
}
declare namespace Commerce {
    class DeclareStartingAmountClientResponse extends ClientResponse<Proxy.Entities.NonSalesTransaction> {
    }
}
declare namespace Commerce {
    class DeclareStartingAmountClientRequest<TResponse extends DeclareStartingAmountClientResponse> extends ClientRequest<TResponse> {
        readonly startingAmount: number;
        readonly comment: string;
        constructor(startingAmount: number, comment?: string, correlationId?: string);
    }
}
declare namespace Commerce {
    class GetApplicationVersionClientResponse extends ClientResponse<string> {
    }
}
declare namespace Commerce {
    class GetApplicationVersionClientRequest<TResponse extends GetApplicationVersionClientResponse> extends ClientRequest<TResponse> {
        constructor(correlationId?: string);
    }
}
declare namespace Commerce {
    class GetAuthenticationTokenClientResponse extends ClientResponse<Client.Entities.IAuthenticationToken> {
    }
}
declare namespace Commerce {
    class GetAuthenticationTokenClientRequest<TResponse extends GetAuthenticationTokenClientResponse> extends ClientRequest<TResponse> {
        constructor(correlationId?: string);
    }
}
declare namespace Commerce {
    class GetChannelConfigurationClientResponse extends ClientResponse<Proxy.Entities.ChannelConfiguration> {
    }
}
declare namespace Commerce {
    class GetChannelConfigurationClientRequest<TResponse extends GetChannelConfigurationClientResponse> extends ClientRequest<TResponse> {
        constructor(correlationId?: string);
    }
}
declare namespace Commerce {
    class GetConnectionStatusClientResponse extends ClientResponse<Client.Entities.ConnectionStatusType> {
    }
}
declare namespace Commerce {
    class GetConnectionStatusClientRequest<TResponse extends GetConnectionStatusClientResponse> extends ClientRequest<TResponse> {
        constructor(correlationId?: string);
    }
}
declare namespace Commerce {
    class GetCurrentCartClientResponse extends ClientResponse<Proxy.Entities.Cart> {
    }
}
declare namespace Commerce {
    class GetCurrentCartClientRequest<TResponse extends GetCurrentCartClientResponse> extends ClientRequest<TResponse> {
        constructor(correlationId?: string);
    }
}
declare namespace Commerce {
    class GetCurrentShiftClientResponse extends ClientResponse<Proxy.Entities.Shift> {
    }
}
declare namespace Commerce {
    class GetCurrentShiftClientRequest<TResponse extends GetCurrentShiftClientResponse> extends ClientRequest<TResponse> {
        constructor(correlationId?: string);
    }
}
declare namespace Commerce {
    class GetCustomerClientResponse extends ClientResponse<Proxy.Entities.Customer> {
    }
}
declare namespace Commerce {
    class GetCustomerClientRequest<TResponse extends GetCustomerClientResponse> extends ClientRequest<TResponse> {
        readonly customerId: string;
        constructor(customerId: string, correlationId?: string);
    }
}
declare namespace Commerce {
    class GetDenominationTotalsClientResponse extends ClientResponse<Proxy.Entities.DenominationDetail[]> {
    }
}
declare namespace Commerce {
    class GetDenominationTotalsClientRequest<TResponse extends GetDenominationTotalsClientResponse> extends ClientRequest<TResponse> {
        readonly denominationDetails: Proxy.Entities.DenominationDetail[];
        readonly tenderTypeId: string;
        readonly currencyCode?: string;
        constructor(correlationId: string, denominationDetails: Proxy.Entities.DenominationDetail[], tenderTypeId: string, currencyCode?: string);
    }
}
declare namespace Commerce {
    class GetDeviceConfigurationClientResponse extends ClientResponse<Proxy.Entities.DeviceConfiguration> {
    }
}
declare namespace Commerce {
    class GetDeviceConfigurationClientRequest<TResponse extends GetDeviceConfigurationClientResponse> extends ClientRequest<TResponse> {
        constructor(correlationId?: string);
    }
}
declare namespace Commerce {
    class GetExtensionProfileClientResponse extends ClientResponse<Proxy.Entities.ExtensionProfile> {
    }
}
declare namespace Commerce {
    class GetExtensionProfileClientRequest<TResponse extends GetExtensionProfileClientResponse> extends ClientRequest<TResponse> {
        constructor(correlationId?: string);
    }
}
declare namespace Commerce {
    class GetHardwareProfileClientResponse extends ClientResponse<Proxy.Entities.HardwareProfile> {
    }
}
declare namespace Commerce {
    class GetHardwareProfileClientRequest<TResponse extends GetHardwareProfileClientResponse> extends ClientRequest<TResponse> {
        constructor(correlationId?: string);
    }
}
declare namespace Commerce {
    class GetKeyedInPriceClientResponse extends ClientResponse<number> {
    }
}
declare namespace Commerce {
    class GetKeyedInPriceClientRequest<TResponse extends GetKeyedInPriceClientResponse> extends ClientRequest<TResponse> {
        readonly productId: number;
        readonly minPrice: number;
        readonly maxPrice: number;
        readonly isMinPriceInclusive: boolean;
        readonly isMaxPriceInclusive: boolean;
        constructor(productId: number, minPrice: number, maxPrice: number, isMinPriceInclusive: boolean, isMaxPriceInclusive: boolean, correlationId?: string);
    }
}
declare namespace Commerce {
    class GetLoggedOnEmployeeClientResponse extends ClientResponse<Proxy.Entities.Employee> {
    }
}
declare namespace Commerce {
    class GetLoggedOnEmployeeClientRequest<TResponse extends GetLoggedOnEmployeeClientResponse> extends ClientRequest<TResponse> {
        constructor(correlationId?: string);
    }
}
declare namespace Commerce {
    class GetOfflinePendingTransactionCountClientResponse extends ClientResponse<number> {
    }
}
declare namespace Commerce {
    class GetOfflinePendingTransactionCountClientRequest<TResponse extends GetOfflinePendingTransactionCountClientResponse> extends ClientRequest<TResponse> {
        constructor(correlationId?: string);
    }
}
declare namespace Commerce {
    class GetOrgUnitConfigurationClientResponse extends ClientResponse<Proxy.Entities.ChannelConfiguration> {
    }
}
declare namespace Commerce {
    class GetOrgUnitConfigurationClientRequest<TResponse extends GetOrgUnitConfigurationClientResponse> extends ClientRequest<TResponse> {
        constructor(correlationId?: string);
    }
}
declare namespace Commerce {
    class GetOrgUnitTenderTypesClientResponse extends ClientResponse<Proxy.Entities.TenderType[]> {
    }
}
declare namespace Commerce {
    class GetOrgUnitTenderTypesClientRequest<TResponse extends GetOrgUnitTenderTypesClientResponse> extends ClientRequest<TResponse> {
        constructor(correlationId?: string);
    }
}
declare namespace Commerce {
    class GetPickupDateClientResponse extends ClientResponse<Date> {
    }
}
declare namespace Commerce {
    class GetPickupDateClientRequest<TResponse extends GetPickupDateClientResponse> extends ClientRequest<TResponse> {
        readonly cart: Proxy.Entities.Cart;
        readonly cartLines: Proxy.Entities.CartLine[];
        constructor(cart: Proxy.Entities.Cart, cartLines: Proxy.Entities.CartLine[], correlationId?: string);
    }
}
declare namespace Commerce {
    class GetReasonCodeLinesClientResponse extends ClientResponse<Proxy.Entities.ReasonCodeLine[]> {
    }
}
declare namespace Commerce {
    class GetReasonCodeLinesClientRequest<TResponse extends GetReasonCodeLinesClientResponse> extends ClientRequest<TResponse> {
        readonly reasonCodeIds: string[];
        constructor(reasonCodeIds: string[], correlationId?: string);
    }
}
declare namespace Commerce {
    class GetReceiptEmailAddressClientResponse extends ClientResponse<Client.Entities.IReceiptEmailResult> {
    }
}
declare namespace Commerce {
    class GetReceiptEmailAddressClientRequest<TResponse extends GetReceiptEmailAddressClientResponse> extends ClientRequest<TResponse> {
    }
}
declare namespace Commerce {
    class GetReceiptsClientResponse extends ClientResponse<Proxy.Entities.Receipt[]> {
    }
}
declare namespace Commerce {
    class GetReceiptsClientRequest<TResponse extends GetReceiptsClientResponse> extends ClientRequest<TResponse> {
        readonly salesOrderId: string;
        readonly retrievalCriteria: Proxy.Entities.ReceiptRetrievalCriteria;
        constructor(salesOrderId: string, retrievalCriteria: Proxy.Entities.ReceiptRetrievalCriteria, correlationId?: string);
    }
}
declare namespace Commerce {
    class GetSalesOrderDetailsByTransactionIdClientResponse extends ClientResponse<Proxy.Entities.SalesOrder> {
    }
}
declare namespace Commerce {
    class GetSalesOrderDetailsByTransactionIdClientRequest<TResponse extends GetSalesOrderDetailsByTransactionIdClientResponse> extends ClientRequest<TResponse> {
        readonly transactionId: string;
        readonly searchLocation: Proxy.Entities.SearchLocation;
        constructor(transactionId: string, searchLocation: Proxy.Entities.SearchLocation, correlationId?: string);
    }
}
declare namespace Commerce {
    class GetSalesOrdersWithNoFiscalTransactionsResponse extends ClientResponse<Proxy.Entities.SalesOrder[]> {
    }
}
declare namespace Commerce {
    class GetSalesOrdersWithNoFiscalTransactionsRequest<TResponse extends GetSalesOrdersWithNoFiscalTransactionsResponse> extends ClientRequest<TResponse> {
        readonly storeNumber: string;
        readonly terminalId: string;
        constructor(storeNumber: string, terminalId: string, correlationId?: string);
    }
}
declare namespace Commerce {
    class GetScanResultClientResponse extends ClientResponse<Proxy.Entities.ScanResult> {
    }
}
declare namespace Commerce {
    class GetScanResultClientRequest<TResponse extends GetScanResultClientResponse> extends ClientRequest<TResponse> {
        readonly scanText: string;
        constructor(scanText: string, correlationId?: string);
    }
}
declare namespace Commerce {
    class GetSessionInfoClientResponse extends ClientResponse<Client.Entities.ISessionInfo> {
    }
}
declare namespace Commerce {
    class GetSessionInfoClientRequest<TResponse extends GetSessionInfoClientResponse> extends ClientRequest<TResponse> {
        constructor(correlationId?: string);
    }
}
declare namespace Commerce {
    class GetShippingChargeClientResponse extends ClientResponse<number> {
    }
}
declare namespace Commerce {
    class GetShippingChargeClientRequest<TResponse extends GetShippingChargeClientResponse> extends ClientRequest<TResponse> {
        readonly cartLines: Proxy.Entities.CartLine[];
        readonly shippingMethod: Proxy.Entities.DeliveryOption;
        readonly shipFromAddress: Proxy.Entities.Address;
        readonly shipToAddress: Proxy.Entities.Address;
        constructor(correlationId: string, cartLines: Proxy.Entities.CartLine[], shippingMethod: Proxy.Entities.DeliveryOption, shipFromAddress: Proxy.Entities.Address, shipToAddress: Proxy.Entities.Address);
    }
}
declare namespace Commerce {
    class GetShippingDateClientResponse extends ClientResponse<Date> {
    }
}
declare namespace Commerce {
    class GetShippingDateClientRequest<TResponse extends GetShippingDateClientResponse> extends ClientRequest<TResponse> {
        readonly originalDeliveryDate: Date;
        readonly deliveryMethod: Proxy.Entities.DeliveryOption;
        constructor(correlationId: string, originalDeliveryDate: Date, deliveryMethod: Proxy.Entities.DeliveryOption);
    }
}
declare namespace Commerce {
    class GetTenderDetailsClientResponse extends ClientResponse<Proxy.Entities.TenderDetail[]> {
    }
}
declare namespace Commerce {
    class GetTenderDetailsClientRequest<TResponse extends GetTenderDetailsClientResponse> extends ClientRequest<TResponse> {
        readonly shiftId: number;
        readonly shiftTerminalId: string;
        readonly tenderTransactionType: Proxy.Entities.ExtensibleTransactionType;
        constructor(correlationId: string, shiftId: number, shiftTerminalId: string, tenderTransactionType: Proxy.Entities.ExtensibleTransactionType);
    }
}
declare namespace Commerce {
    class GetTransferOrderHeaderClientResponse extends ClientResponse<Proxy.Entities.TransferOrder> {
    }
}
declare namespace Commerce {
    class GetTransferOrderHeaderClientRequest<TResponse extends GetTransferOrderHeaderClientResponse> extends ClientRequest<TResponse> {
        readonly transferOrder: Proxy.Entities.TransferOrder;
        readonly actionType: number;
        constructor(correlationId: string, transferOrder: Proxy.Entities.TransferOrder, actionType: number);
    }
}
declare namespace Commerce {
    class PrintPackingSlipClientResponse extends ClientResponse<void> {
    }
}
declare namespace Commerce {
    class PrintPackingSlipClientRequest<TResponse extends PrintPackingSlipClientResponse> extends ClientRequest<TResponse> {
        readonly packingSlips: Proxy.Entities.Receipt[];
        readonly packingSlipId: string;
        readonly isReprint: boolean;
        constructor(packingSlipId: string, isReprint: boolean, packingSlips: Proxy.Entities.Receipt[], correlationId?: string);
    }
}
declare namespace Commerce {
    class RefreshCartClientResponse extends ClientResponse<Proxy.Entities.Cart> {
    }
}
declare namespace Commerce {
    class RefreshCartClientRequest<TResponse extends RefreshCartClientResponse> extends ClientRequest<TResponse> {
        constructor(correlationId?: string);
    }
}
declare namespace Commerce {
    class RegisterCustomAuditEventClientResponse extends ClientResponse<void> {
    }
}
declare namespace Commerce {
    class RegisterCustomAuditEventClientRequest<TResponse extends RegisterCustomAuditEventClientResponse> extends ClientRequest<TResponse> {
        readonly auditEventTypeValue: number;
        readonly channelId: number;
        readonly storeId: string;
        readonly terminalId: string;
        readonly staff: string;
        readonly source: string;
        readonly message: string;
        readonly logLevel: Proxy.Entities.AuditLogTraceLevel;
        readonly transactionReference?: Client.Entities.IAuditEventTransactionReference;
        readonly extensionProperties?: Proxy.Entities.CommerceProperty[];
        constructor(auditEventTypeValue: number, channelId: number, storeId: string, terminalId: string, staff: string, source: string, message: string, logLevel: Proxy.Entities.AuditLogTraceLevel, transactionReference?: Client.Entities.IAuditEventTransactionReference, extensionProperties?: Proxy.Entities.CommerceProperty[], correlationId?: string);
    }
}
declare namespace Commerce {
    class RegisterPrintReceiptCopyEventResponse extends ClientResponse<void> {
    }
}
declare namespace Commerce {
    class RegisterPrintReceiptCopyEventRequest<TResponse extends RegisterPrintReceiptCopyEventResponse> extends ClientRequest<TResponse> {
        readonly salesOrderToPrint: Proxy.Entities.SalesOrder;
        readonly source: string;
        constructor(salesOrderToPrint: Proxy.Entities.SalesOrder, source: string, correlationId?: string);
    }
}
declare namespace Commerce {
    class ResumeSuspendedCartClientResponse extends ClientResponse<Proxy.Entities.Cart> {
    }
}
declare namespace Commerce {
    class ResumeSuspendedCartClientRequest<TResponse extends ResumeSuspendedCartClientResponse> extends ClientRequest<TResponse> {
        readonly cartId: string;
        constructor(cartId: string, correlationId?: string);
    }
}
declare namespace Commerce {
    class SaveAttributesOnCartClientResponse extends ClientResponse<Proxy.Entities.Cart> {
    }
}
declare namespace Commerce {
    class SaveAttributesOnCartClientRequest<TResponse extends SaveAttributesOnCartClientResponse> extends ClientRequest<TResponse> {
        readonly attributes: Proxy.Entities.AttributeValueBase[];
        constructor(attributes: Proxy.Entities.AttributeValueBase[], correlationId?: string);
    }
}
declare namespace Commerce {
    class SaveAttributesOnCartLinesClientResponse extends ClientResponse<Proxy.Entities.Cart> {
    }
}
declare namespace Commerce {
    class SaveAttributesOnCartLinesClientRequest<TResponse extends SaveAttributesOnCartLinesClientResponse> extends ClientRequest<TResponse> {
        readonly attributesOnCartLines: Client.Entities.IAttributesOnCartLine[];
        constructor(attributesOnCartLines: Client.Entities.IAttributesOnCartLine[], correlationId?: string);
    }
}
declare namespace Commerce {
    class SaveExtensionPropertiesOnCartClientResponse extends ClientResponse<Proxy.Entities.Cart> {
    }
}
declare namespace Commerce {
    class SaveExtensionPropertiesOnCartClientRequest<TResponse extends SaveExtensionPropertiesOnCartClientResponse> extends ClientRequest<TResponse> {
        readonly extensionProperties: Proxy.Entities.CommerceProperty[];
        constructor(extensionProperties: Proxy.Entities.CommerceProperty[], correlationId?: string);
    }
}
declare namespace Commerce {
    class SaveExtensionPropertiesOnCartLinesClientResponse extends ClientResponse<Proxy.Entities.Cart> {
    }
}
declare namespace Commerce {
    class SaveExtensionPropertiesOnCartLinesClientRequest<TResponse extends SaveExtensionPropertiesOnCartLinesClientResponse> extends ClientRequest<TResponse> {
        readonly extensionPropertiesOnCartLines: Client.Entities.IExtensionPropertiesOnCartLine[];
        constructor(extensionPropertiesOnCartLines: Client.Entities.IExtensionPropertiesOnCartLine[], correlationId?: string);
    }
}
declare namespace Commerce {
    class SaveFiscalTransactionClientResponse extends ClientResponse<void> {
    }
}
declare namespace Commerce {
    class SaveFiscalTransactionClientRequest<TResponse extends SaveFiscalTransactionClientResponse> extends ClientRequest<TResponse> {
        readonly fiscalTransaction: Proxy.Entities.FiscalTransaction;
        constructor(fiscalTransaction: Proxy.Entities.FiscalTransaction, correlationId?: string);
    }
}
declare namespace Commerce {
    class SaveReasonCodeLinesOnCartClientResponse extends ClientResponse<Proxy.Entities.Cart> {
    }
}
declare namespace Commerce {
    class SaveReasonCodeLinesOnCartClientRequest<TResponse extends SaveReasonCodeLinesOnCartClientResponse> extends ClientRequest<TResponse> {
        readonly reasonCodeLines: Proxy.Entities.ReasonCodeLine[];
        constructor(reasonCodeLines: Proxy.Entities.ReasonCodeLine[], correlationId?: string);
    }
}
declare namespace Commerce {
    class SaveReasonCodeLinesOnCartLinesClientResponse extends ClientResponse<Proxy.Entities.Cart> {
    }
}
declare namespace Commerce {
    class SaveReasonCodeLinesOnCartLinesClientRequest<TResponse extends SaveReasonCodeLinesOnCartLinesClientResponse> extends ClientRequest<TResponse> {
        readonly reasonCodeLinesOnCartLines: Client.Entities.IReasonCodeLinesOnCartLine[];
        constructor(reasonCodeLinesOnCartLines: Client.Entities.IReasonCodeLinesOnCartLine[], correlationId?: string);
    }
}
declare namespace Commerce {
    class SelectSalesLinesForPickUpClientResponse extends ClientResponse<Proxy.Entities.Cart> {
    }
}
declare namespace Commerce {
    class SelectSalesLinesForPickUpClientRequest<TResponse extends SelectSalesLinesForPickUpClientResponse> extends ClientRequest<TResponse> {
        readonly salesId: string;
        constructor(correlationId: string, salesId: string);
    }
}
declare namespace Commerce {
    class SelectZipCodeInfoClientResponse extends ClientResponse<Proxy.Entities.ZipCodeInfo> {
    }
}
declare namespace Commerce {
    class SelectZipCodeInfoClientRequest extends ClientRequest<SelectZipCodeInfoClientResponse> {
        readonly zipCodeInfos: Proxy.Entities.ZipCodeInfo[];
        constructor(correlationId: string, zipCodeInfos: Proxy.Entities.ZipCodeInfo[]);
    }
}
declare namespace Commerce {
    class SetCartAttributesClientResponse extends ClientResponse<Proxy.Entities.Cart> {
    }
}
declare namespace Commerce {
    class SetCartAttributesClientRequest<TResponse extends SetCartAttributesClientResponse> extends ClientRequest<TResponse> {
        readonly attributeValues: Proxy.Entities.AttributeValueBase[];
        constructor(attributeValues: Proxy.Entities.AttributeValueBase[], correlationId?: string);
    }
}
declare namespace Commerce {
    class ShowAlphanumericInputDialogClientResponse extends ClientResponse<Client.Entities.Dialogs.IAlphanumericInputDialogResult> {
    }
}
declare namespace Commerce {
    class ShowAlphanumericInputDialogClientRequest<TResponse extends ShowAlphanumericInputDialogClientResponse> extends ClientRequest<TResponse> {
        readonly options: Client.Entities.Dialogs.IAlphanumericInputDialogOptions;
        constructor(options: Client.Entities.Dialogs.IAlphanumericInputDialogOptions, correlationId?: string);
    }
}
declare namespace Commerce {
    class ShowChangeDueClientResponse extends Response {
    }
}
declare namespace Commerce {
    class ShowChangeDueClientRequest extends Request<ShowChangeDueClientResponse> {
        readonly salesOrder: Proxy.Entities.SalesOrder;
        constructor(correlationId: string, salesOrder: Proxy.Entities.SalesOrder);
    }
}
declare namespace Commerce {
    class ShowListInputDialogClientResponse extends ClientResponse<Client.Entities.Dialogs.IListInputDialogResult> {
    }
}
declare namespace Commerce {
    class ShowListInputDialogClientRequest<TResponse extends ShowListInputDialogClientResponse> extends ClientRequest<TResponse> {
        readonly options: Client.Entities.Dialogs.IListInputDialogOptions;
        constructor(options: Client.Entities.Dialogs.IListInputDialogOptions, correlationId?: string);
    }
}
declare namespace Commerce {
    class ShowMessageDialogClientResponse extends ClientResponse<Client.Entities.Dialogs.IMessageDialogResult> {
    }
}
declare namespace Commerce {
    class ShowMessageDialogClientRequest<TResponse extends ShowMessageDialogClientResponse> extends ClientRequest<TResponse> {
        readonly options: Client.Entities.Dialogs.IMessageDialogOptions;
        constructor(options: Client.Entities.Dialogs.IMessageDialogOptions, correlationId?: string);
    }
}
declare namespace Commerce {
    class ShowNumericInputDialogClientResponse extends ClientResponse<Client.Entities.Dialogs.INumericInputDialogResult> {
    }
}
declare namespace Commerce {
    class ShowNumericInputDialogClientRequest<TResponse extends ShowNumericInputDialogClientResponse> extends ClientRequest<TResponse> {
        readonly options: Client.Entities.Dialogs.INumericInputDialogOptions;
        constructor(options: Client.Entities.Dialogs.INumericInputDialogOptions, correlationId?: string);
    }
}
declare namespace Commerce {
    class ShowTextInputDialogClientResponse extends ClientResponse<Client.Entities.Dialogs.ITextInputDialogResult> {
    }
}
declare namespace Commerce {
    class ShowTextInputDialogClientRequest<TResponse extends ShowTextInputDialogClientResponse> extends ClientRequest<TResponse> {
        readonly options: Client.Entities.Dialogs.ITextInputDialogOptions;
        constructor(options: Client.Entities.Dialogs.ITextInputDialogOptions, correlationId?: string);
    }
}
declare namespace Commerce {
    class SyncAllStockCountJournalsClientResponse extends ClientResponse<Proxy.Entities.StockCountJournal[]> {
    }
}
declare namespace Commerce {
    class SyncAllStockCountJournalsClientRequest<TResponse extends SyncAllStockCountJournalsClientResponse> extends ClientRequest<TResponse> {
        constructor(correlationId?: string);
    }
}
declare namespace Commerce.Extensibility {
    interface ISearchFilterDefinition {
        filterType: Proxy.Entities.SearchFilterType;
        key: string;
        label: string;
    }
}
declare namespace Commerce.Extensibility {
    interface ITextSearchFilterDefinition extends ISearchFilterDefinition {
    }
}
declare namespace Commerce {
    abstract class OperationRequest<TResponse extends Response> extends Request<TResponse> {
        skipManagerPermissionChecks: boolean;
        readonly operationId: Proxy.Entities.RetailOperation;
        constructor(operationId: Proxy.Entities.RetailOperation, correlationId: string);
    }
}
declare namespace Commerce.Extensibility {
    abstract class ExtensionOperationRequestBase<TResponse extends Response> extends OperationRequest<TResponse> {
        constructor(operationId: number, correlationId: string);
    }
}
declare namespace Commerce {
    class AddAffiliationOperationResponse extends Response {
        readonly cart: Proxy.Entities.Cart;
        constructor(cart: Proxy.Entities.Cart);
    }
}
declare namespace Commerce {
    class AddAffiliationOperationRequest<TResponse extends AddAffiliationOperationResponse> extends OperationRequest<TResponse> {
        readonly affiliationNames: string[];
        readonly affiliations: Proxy.Entities.Affiliation[];
        constructor(affiliationNames: string[], affiliations: Proxy.Entities.Affiliation[], correlationId: string);
    }
}
declare namespace Commerce {
    class AddCouponsOperationResponse extends Response {
        readonly cart: Proxy.Entities.Cart;
        constructor(cart: Proxy.Entities.Cart);
    }
}
declare namespace Commerce {
    class AddCouponsOperationRequest<TResponse extends AddCouponsOperationResponse> extends OperationRequest<TResponse> {
        readonly couponCode?: string;
        constructor(correlationId: string, couponCode?: string);
    }
}
declare namespace Commerce {
    class AddItemToCartOperationResponse extends Response {
        readonly cart: Proxy.Entities.Cart;
        constructor(cart: Proxy.Entities.Cart);
    }
}
declare namespace Commerce {
    class AddItemToCartOperationRequest<TResponse extends AddItemToCartOperationResponse> extends OperationRequest<TResponse> {
        readonly productSaleDetails: Client.Entities.IProductSaleReturnDetails[];
        constructor(productSaleDetails: Client.Entities.IProductSaleReturnDetails[], correlationId: string);
    }
}
declare namespace Commerce {
    class AddToGiftCardOperationResponse extends Response {
    }
}
declare namespace Commerce {
    class AddToGiftCardOperationRequest extends OperationRequest<AddToGiftCardOperationResponse> {
        tenderTypeId: string;
        constructor(correlationId: string);
    }
}
declare namespace Commerce {
    class CalculateTotalOperationResponse extends Response {
        readonly cart: Proxy.Entities.Cart;
        constructor(cart: Proxy.Entities.Cart);
    }
}
declare namespace Commerce {
    class CalculateTotalOperationRequest<TResponse extends LineDiscountAmountOperationResponse> extends OperationRequest<TResponse> {
        constructor(correlationId: string);
    }
}
declare namespace Commerce {
    class CarryoutSelectedProductsOperationResponse extends Response {
        readonly cart: Proxy.Entities.Cart;
        constructor(cart: Proxy.Entities.Cart);
    }
}
declare namespace Commerce {
    class CarryoutSelectedProductsOperationRequest<TResponse extends CarryoutSelectedProductsOperationResponse> extends OperationRequest<TResponse> {
        readonly cart: Proxy.Entities.Cart;
        readonly cartLines: Proxy.Entities.CartLine[];
        constructor(correlationId: string, cartLines: Proxy.Entities.CartLine[]);
    }
}
declare namespace Commerce {
    class ChangeCartLineUnitOfMeasureOperationResponse extends Response {
        readonly cart: Proxy.Entities.Cart;
        constructor(cart: Proxy.Entities.Cart);
    }
}
declare namespace Commerce {
    class ChangeCartLineUnitOfMeasureOperationRequest<TResponse extends ChangeCartLineUnitOfMeasureOperationResponse> extends OperationRequest<TResponse> {
        readonly cartLineId: string;
        readonly unitOfMeasure?: Proxy.Entities.UnitOfMeasure;
        constructor(cartLineId: string, correlationId: string, unitOfMeasure?: Proxy.Entities.UnitOfMeasure);
    }
}
declare namespace Commerce {
    class CheckGiftCardBalanceOperationResponse extends Response {
    }
}
declare namespace Commerce {
    class CheckGiftCardBalanceOperationRequest extends OperationRequest<CheckGiftCardBalanceOperationResponse> {
        tenderTypeId: string;
        constructor(correlationId: string);
    }
}
declare namespace Commerce {
    class CloseShiftOperationResponse extends Response {
    }
}
declare namespace Commerce {
    class CloseShiftOperationRequest<TResponse extends CloseShiftOperationResponse> extends OperationRequest<TResponse> {
        constructor(correlationId: string);
    }
}
declare namespace Commerce {
    class CreateCustomerOrderOperationResponse extends Response {
        readonly cart: Proxy.Entities.Cart;
        constructor(cart: Proxy.Entities.Cart);
    }
}
declare namespace Commerce {
    class CreateCustomerOrderOperationRequest<TResponse extends CreateCustomerOrderOperationResponse> extends OperationRequest<TResponse> {
        constructor(correlationId: string);
    }
}
declare namespace Commerce {
    class CreateCustomerQuoteOperationResponse extends Response {
        readonly cart: Proxy.Entities.Cart;
        constructor(cart: Proxy.Entities.Cart);
    }
}
declare namespace Commerce {
    class CreateCustomerQuoteOperationRequest<TResponse extends CreateCustomerQuoteOperationResponse> extends OperationRequest<TResponse> {
        readonly quotationExpirationDate?: Date;
        constructor(correlationId: string, quotationExpirationDate?: Date);
    }
}
declare namespace Commerce {
    abstract class ServiceResponse extends Response {
    }
}
declare namespace Commerce {
    abstract class ServiceRequest<TResponse extends ServiceResponse> extends Request<TResponse> {
        constructor(correlationId: string);
    }
}
declare namespace Commerce {
    class CreateEmptyCartServiceResponse extends ServiceResponse {
        readonly cart: Proxy.Entities.Cart;
        constructor(cart: Proxy.Entities.Cart);
    }
}
declare namespace Commerce {
    class CreateEmptyCartServiceRequest extends ServiceRequest<CreateEmptyCartServiceResponse> {
        constructor(correlationId: string);
    }
}
declare namespace Commerce {
    class CustomerAccountDepositOperationResponse extends Response {
        readonly cart: Proxy.Entities.Cart;
        constructor(cart: Proxy.Entities.Cart);
    }
}
declare namespace Commerce {
    class CustomerAccountDepositOperationRequest<TResponse extends CustomerAccountDepositOperationResponse> extends OperationRequest<TResponse> {
        readonly accountDepositAmount?: number;
        constructor(correlationId: string, accountDepositAmount?: number);
    }
}
declare namespace Commerce {
    class DepositOverrideOperationResponse extends Response {
        readonly cart: Proxy.Entities.Cart;
        constructor(cart: Proxy.Entities.Cart);
    }
}
declare namespace Commerce {
    class DepositOverrideOperationRequest<TResponse extends DepositOverrideOperationResponse> extends OperationRequest<TResponse> {
        readonly depositOverrideAmount: number;
        constructor(correlationId: string);
        constructor(depositOverrideAmount: number, correlationId: string);
    }
}
declare namespace Commerce {
    class EditCustomerOrderOperationResponse extends Response {
        readonly cart: Proxy.Entities.Cart;
        constructor(cart: Proxy.Entities.Cart);
    }
}
declare namespace Commerce {
    class EditCustomerOrderOperationRequest<TResponse extends EditCustomerOrderOperationResponse> extends OperationRequest<TResponse> {
        readonly salesId: string;
        constructor(correlationId: string, salesId: string);
    }
}
declare namespace Commerce {
    class GetTaxOverridesServiceResponse extends ServiceResponse {
        readonly taxOverrides: Proxy.Entities.TaxOverride[];
        constructor(taxOverrides: Proxy.Entities.TaxOverride[]);
    }
}
declare namespace Commerce {
    class GetTaxOverridesServiceRequest extends ServiceRequest<GetTaxOverridesServiceResponse> {
        readonly taxOverrideType: Proxy.Entities.TaxOverrideBy;
        constructor(correlationId: string, taxOverrideType: Proxy.Entities.TaxOverrideBy);
    }
}
declare namespace Commerce {
    class InventoryLookupOperationResponse extends Response {
        readonly orgUnitAvailability: Proxy.Entities.OrgUnitAvailability[];
        constructor(orgUnitAvailability: Proxy.Entities.OrgUnitAvailability[]);
    }
}
declare namespace Commerce {
    class InventoryLookupOperationRequest<TResponse extends InventoryLookupOperationResponse> extends OperationRequest<TResponse> {
        readonly productRecordId: number;
        readonly criteria: Proxy.Entities.OrgUnitAvailabilitySearchCriteria;
        constructor(productRecordId: number, correlationId: string, criteria?: Proxy.Entities.OrgUnitAvailabilitySearchCriteria);
    }
}
declare namespace Commerce {
    class IssueGiftCardOperationResponse extends Response {
    }
}
declare namespace Commerce {
    class IssueGiftCardOperationRequest extends OperationRequest<IssueGiftCardOperationResponse> {
        tenderTypeId: string;
        constructor(correlationId: string);
    }
}
declare namespace Commerce {
    class LineDiscountAmountOperationResponse extends Response {
        readonly cart: Proxy.Entities.Cart;
        constructor(cart: Proxy.Entities.Cart);
    }
}
declare namespace Commerce {
    class LineDiscountAmountOperationRequest<TResponse extends LineDiscountAmountOperationResponse> extends OperationRequest<TResponse> {
        readonly cartLineDiscounts: Client.Entities.ICartLineDiscount[];
        constructor(cartLineDiscounts: Client.Entities.ICartLineDiscount[], correlationId: string);
    }
}
declare namespace Commerce {
    class LineDiscountPercentOperationResponse extends Response {
        readonly cart: Proxy.Entities.Cart;
        constructor(cart: Proxy.Entities.Cart);
    }
}
declare namespace Commerce {
    class LineDiscountPercentOperationRequest<TResponse extends LineDiscountPercentOperationResponse> extends OperationRequest<TResponse> {
        readonly cartLineDiscounts: Client.Entities.ICartLineDiscount[];
        constructor(cartLineDiscounts: Client.Entities.ICartLineDiscount[], correlationId: string);
    }
}
declare namespace Commerce {
    class LogOffOperationResponse extends Response {
    }
}
declare namespace Commerce {
    class LogOffOperationRequest<TResponse extends LogOffOperationResponse> extends OperationRequest<TResponse> {
        constructor(correlationId: string);
    }
}
declare namespace Commerce {
    class LoyaltyCardPointsBalanceOperationResponse extends Response {
        readonly loyaltyCard: Proxy.Entities.LoyaltyCard;
        cart?: Proxy.Entities.Cart;
        constructor(loyaltyCard: Proxy.Entities.LoyaltyCard, currentCart?: Proxy.Entities.Cart);
    }
}
declare namespace Commerce {
    class LoyaltyCardPointsBalanceOperationRequest<TResponse extends LoyaltyCardPointsBalanceOperationResponse> extends OperationRequest<TResponse> {
        readonly loyaltyCardId?: string;
        constructor(correlationId: string, loyaltyCardId?: string);
    }
}
declare namespace Commerce {
    class OverrideLineTaxFromListOperationResponse extends Response {
        readonly cart: Proxy.Entities.Cart;
        constructor(cart: Proxy.Entities.Cart);
    }
}
declare namespace Commerce {
    class OverrideLineTaxFromListOperationRequest extends OperationRequest<OverrideLineTaxFromListOperationResponse> {
        readonly cartLineId: string;
        constructor(correlationId: string, cartLineId: string);
    }
}
declare namespace Commerce {
    class OverrideLineTaxOperationResponse extends Response {
        readonly cart: Proxy.Entities.Cart;
        constructor(cart: Proxy.Entities.Cart);
    }
}
declare namespace Commerce {
    class OverrideLineTaxOperationRequest extends OperationRequest<OverrideLineTaxOperationResponse> {
        readonly taxOverrideCode: string;
        readonly cartLineId: string;
        constructor(correlationId: string, cartLineId: string, taxOverrideCode: string);
    }
}
declare namespace Commerce {
    class OverrideTransactionTaxOperationResponse extends Response {
        readonly cart: Proxy.Entities.Cart;
        constructor(cart: Proxy.Entities.Cart);
    }
}
declare namespace Commerce {
    class OverrideTransactionTaxOperationRequest extends OperationRequest<OverrideTransactionTaxOperationResponse> {
        readonly taxOverrideCode: string;
        constructor(correlationId: string, taxOverrideCode: string);
    }
}
declare namespace Commerce {
    class PickupAllOperationResponse extends Response {
        readonly cart: Proxy.Entities.Cart;
        constructor(cart: Proxy.Entities.Cart);
    }
}
declare namespace Commerce {
    class PickupAllOperationRequest<TResponse extends PickupAllOperationResponse> extends OperationRequest<TResponse> {
        readonly pickupDate: Date;
        readonly orgUnitNumber: string;
        constructor(correlationId: string, pickupDate: Date, orgUnitNumber: string);
    }
}
declare namespace Commerce {
    class PriceOverrideOperationResponse extends Response {
        readonly cart: Proxy.Entities.Cart;
        constructor(cart: Proxy.Entities.Cart);
    }
}
declare namespace Commerce {
    class PriceOverrideOperationRequest<TResponse extends PriceOverrideOperationResponse> extends OperationRequest<TResponse> {
        readonly cartLineId: string;
        readonly price: number;
        constructor(cartLineId: string, price: number, correlationId: string);
    }
}
declare namespace Commerce {
    class SafeDropOperationResponse extends Response {
        readonly transaction: Proxy.Entities.DropAndDeclareTransaction;
        constructor(transaction: Proxy.Entities.DropAndDeclareTransaction);
    }
}
declare namespace Commerce {
    class SafeDropOperationRequest<TResponse extends SafeDropOperationResponse> extends OperationRequest<TResponse> {
        constructor(correlationId: string);
    }
}
declare namespace Commerce {
    class SetCartLineCommentOperationResponse extends Response {
        readonly cart: Proxy.Entities.Cart;
        constructor(cart: Proxy.Entities.Cart);
    }
}
declare namespace Commerce {
    class SetCartLineCommentOperationRequest<TResponse extends SetCartLineCommentOperationResponse> extends OperationRequest<TResponse> {
        readonly cartLineId: string;
        readonly comment: string;
        constructor(cartLineId: string, comment: string, correlationId: string);
    }
}
declare namespace Commerce {
    class SetCartLineQuantityOperationResponse extends Response {
        readonly cart: Proxy.Entities.Cart;
        constructor(cart: Proxy.Entities.Cart);
    }
}
declare namespace Commerce {
    class SetCartLineQuantityOperationRequest<TResponse extends SetCartLineQuantityOperationResponse> extends OperationRequest<TResponse> {
        readonly cartLineId: string;
        readonly quantity?: number;
        constructor(correlationId: string, cartLineId: string, quantity?: number);
    }
}
declare namespace Commerce {
    class SetCustomerOnCartOperationResponse extends Response {
        readonly cart: Proxy.Entities.Cart;
        constructor(cart: Proxy.Entities.Cart);
    }
}
declare namespace Commerce {
    class SetCustomerOnCartOperationRequest<TResponse extends SetCustomerOnCartOperationResponse> extends OperationRequest<TResponse> {
        readonly customerAccountNumber: string;
        constructor(correlationId: string, customerAccountNumber: string);
    }
}
declare namespace Commerce {
    class SetTransactionCommentOperationRequest<TResponse extends SetTransactionCommentOperationResponse> extends OperationRequest<TResponse> {
        readonly comment: string;
        constructor(correlationId: string, comment?: string);
    }
}
declare namespace Commerce {
    class SetTransactionCommentOperationResponse extends Response {
        readonly cart: Proxy.Entities.Cart;
        constructor(cart: Proxy.Entities.Cart);
    }
}
declare namespace Commerce {
    class SuspendCurrentCartOperationResponse extends Response {
        readonly cart: Proxy.Entities.Cart;
        constructor(cart: Proxy.Entities.Cart);
    }
}
declare namespace Commerce {
    class SuspendCurrentCartOperationRequest<TResponse extends SuspendCurrentCartOperationResponse> extends OperationRequest<TResponse> {
        constructor(correlationId: string);
    }
}
declare namespace Commerce {
    class TenderDeclarationOperationResponse extends Response {
        readonly transaction: Proxy.Entities.DropAndDeclareTransaction;
        constructor(transaction: Proxy.Entities.DropAndDeclareTransaction);
    }
}
declare namespace Commerce {
    class TenderDeclarationOperationRequest<TResponse extends TenderDeclarationOperationResponse> extends OperationRequest<TResponse> {
        constructor(correlationId: string);
    }
}
declare namespace Commerce {
    class TenderRemovalOperationResponse extends Response {
        readonly transaction: Proxy.Entities.NonSalesTransaction;
        constructor(transaction: Proxy.Entities.NonSalesTransaction);
    }
}
declare namespace Commerce {
    class TenderRemovalOperationRequest<TResponse extends TenderRemovalOperationResponse> extends OperationRequest<TResponse> {
        constructor(correlationId: string);
    }
}
declare namespace Commerce {
    class TotalDiscountAmountOperationResponse extends Response {
        readonly cart: Proxy.Entities.Cart;
        constructor(cart: Proxy.Entities.Cart);
    }
}
declare namespace Commerce {
    class TotalDiscountAmountOperationRequest<TResponse extends TotalDiscountAmountOperationResponse> extends OperationRequest<TResponse> {
        readonly cart: Proxy.Entities.Cart;
        readonly discountValue: number;
        constructor(cart: Proxy.Entities.Cart, correlationId: string, discountValue?: number);
    }
}
declare namespace Commerce {
    class TotalDiscountPercentOperationResponse extends Response {
        readonly cart: Proxy.Entities.Cart;
        constructor(cart: Proxy.Entities.Cart);
    }
}
declare namespace Commerce {
    class TotalDiscountPercentOperationRequest<TResponse extends TotalDiscountPercentOperationResponse> extends OperationRequest<TResponse> {
        readonly cart: Proxy.Entities.Cart;
        readonly discountValue: number;
        constructor(cart: Proxy.Entities.Cart, correlationId: string, discountValue?: number);
    }
}
declare namespace Commerce {
    class VoidCartLineOperationResponse extends Response {
        readonly cart: Proxy.Entities.Cart;
        constructor(cart: Proxy.Entities.Cart);
    }
}
declare namespace Commerce {
    class VoidCartLineOperationRequest<TResponse extends VoidCartLineOperationResponse> extends OperationRequest<TResponse> {
        readonly cartLineId: string;
        constructor(cartLineId: string, correlationId: string);
    }
}
declare namespace Commerce {
    class VoidTenderLineOperationResponse extends Response {
        readonly cart: Proxy.Entities.Cart;
        constructor(cart: Proxy.Entities.Cart);
    }
}
declare namespace Commerce {
    class VoidTenderLineOperationRequest<TResponse extends VoidTenderLineOperationResponse> extends OperationRequest<TResponse> {
        readonly tenderLineId: string;
        constructor(tenderLineId: string, correlationId: string);
    }
}
declare namespace Commerce {
    class VoidTransactionOperationResponse extends Response {
        readonly cart: Proxy.Entities.Cart;
        constructor(cart: Proxy.Entities.Cart);
    }
}
declare namespace Commerce {
    class VoidTransactionOperationRequest<TResponse extends VoidTransactionOperationResponse> extends OperationRequest<TResponse> {
        readonly promptConfirmation: boolean;
        constructor(promptConfirmation: boolean, correlationId: string);
    }
}
declare namespace Commerce {
    class AddPreprocessedTenderLineToCartClientRequest<TResponse extends AddPreprocessedTenderLineToCartClientResponse> extends Request<TResponse> {
        readonly tenderLine: Proxy.Entities.TenderLine;
        constructor(tenderLine: Proxy.Entities.TenderLine, correlationId?: string);
    }
}
declare namespace Commerce {
    class AddPreprocessedTenderLineToCartClientResponse extends ClientResponse<Proxy.Entities.Cart> {
    }
}
declare namespace Commerce.Payments {
    class GetGiftCardByIdServiceRequest<TResponse extends GetGiftCardByIdServiceResponse> extends ServiceRequest<TResponse> {
        readonly giftCardId: string;
        constructor(correlationId: string, giftCardId: string);
    }
}
declare namespace Commerce.Payments {
    class GetGiftCardByIdServiceResponse extends ServiceResponse {
        readonly giftCard: Proxy.Entities.GiftCard;
        constructor(giftCard: Proxy.Entities.GiftCard);
    }
}
declare namespace Commerce {
    class GetPaymentCardTypeByBinRangeClientRequest<TResponse extends GetPaymentCardTypeByBinRangeClientResponse> extends Request<TResponse> {
        readonly paymentCardNumber: string;
        readonly isSwipe: boolean;
        readonly cardInfo: Client.Entities.ICardInfo;
        readonly extensionTransactionProperties?: Commerce.Client.Entities.IExtensionTransaction;
        constructor(paymentCardNumber: string, isSwipe: boolean, cardInfo: Client.Entities.ICardInfo, extensionTransactionProperties?: Commerce.Client.Entities.IExtensionTransaction, correlationId?: string);
    }
}
declare namespace Commerce {
    class GetPaymentCardTypeByBinRangeClientResponse extends ClientResponse<Proxy.Entities.CardTypeInfo[]> {
    }
}
declare namespace Commerce.Payments {
    class UpdateTenderLineSignatureServiceRequest<TResponse extends UpdateTenderLineSignatureServiceResponse> extends ServiceRequest<TResponse> {
        readonly tenderLineId: string;
        readonly signatureData: string;
        constructor(correlationId: string, tenderLineId: string, signatureData: string);
    }
}
declare namespace Commerce.Payments {
    class UpdateTenderLineSignatureServiceResponse extends ServiceResponse {
        readonly cart: Proxy.Entities.Cart;
        constructor(cart: Proxy.Entities.Cart);
    }
}
declare namespace Commerce {
    class CardPaymentAuthorizePaymentRequest<TResponse extends CardPaymentAuthorizePaymentResponse> extends Request<TResponse> {
        readonly paymentConnectorId: string;
        readonly amount: number;
        readonly tenderInfo: Commerce.Client.Entities.ITenderInfo;
        readonly extensionTransactionProperties: Commerce.Client.Entities.IExtensionTransaction;
        constructor(paymentConnectorId: string, amount: number, tenderInfo: Commerce.Client.Entities.ITenderInfo, extensionTransactionProperties: Commerce.Client.Entities.IExtensionTransaction, correlationId?: string);
    }
}
declare namespace Commerce {
    class CardPaymentAuthorizePaymentResponse extends ClientResponse<Client.Entities.IPaymentInfo> {
    }
}
declare namespace Commerce {
    class CardPaymentBeginTransactionRequest<TResponse extends CardPaymentBeginTransactionResponse> extends Request<TResponse> {
        constructor(correlationId?: string);
    }
}
declare namespace Commerce {
    class CardPaymentBeginTransactionResponse extends Response {
    }
}
declare namespace Commerce {
    class CardPaymentCapturePaymentRequest<TResponse extends CardPaymentCapturePaymentResponse> extends Request<TResponse> {
        readonly amount: number;
        readonly paymentProperties: string;
        readonly paymentServiceAccountId: string;
        readonly extensionTransactionProperties: Commerce.Client.Entities.IExtensionTransaction;
        constructor(amount: number, paymentProperties: string, extensionTransactionProperties: Commerce.Client.Entities.IExtensionTransaction, correlationId?: string, paymentServiceAccountId?: string);
    }
}
declare namespace Commerce {
    class CardPaymentCapturePaymentResponse extends ClientResponse<Client.Entities.IPaymentInfo> {
    }
}
declare namespace Commerce {
    class CardPaymentEndTransactionRequest<TResponse extends CardPaymentEndTransactionResponse> extends Request<TResponse> {
        constructor(correlationId?: string);
    }
}
declare namespace Commerce {
    class CardPaymentEndTransactionResponse extends Response {
    }
}
declare namespace Commerce {
    class CardPaymentEnquireGiftCardBalancePeripheralRequest<TResponse extends CardPaymentEnquireGiftCardBalancePeripheralResponse> extends Request<TResponse> {
        readonly paymentConnectorId: string;
        readonly tenderInfo: Client.Entities.ITenderInfo;
        readonly extensionTransactionProperties: Client.Entities.IExtensionTransaction;
        constructor(correlationId: string, paymentConnectorId: string, tenderInfo: Client.Entities.ITenderInfo, extensionTransactionProperties?: Client.Entities.IExtensionTransaction);
    }
}
declare namespace Commerce {
    class CardPaymentEnquireGiftCardBalancePeripheralResponse extends Response {
        readonly paymentInfo: Client.Entities.IPaymentInfo;
        constructor(paymentInfo: Client.Entities.IPaymentInfo);
    }
}
declare namespace Commerce {
    class CardPaymentExecuteTaskRequest<TResponse extends CardPaymentExecuteTaskResponse> extends Request<TResponse> {
        readonly task: string;
        readonly extensionTransactionProperties: Client.Entities.IExtensionTransaction;
        constructor(task: string, extensionTransactionProperties: Client.Entities.IExtensionTransaction, correlationId?: string);
    }
}
declare namespace Commerce {
    class CardPaymentExecuteTaskResponse extends ClientResponse<Client.Entities.IPeripheralConfiguration[]> {
    }
}
declare namespace Commerce {
    class CardPaymentRefundPaymentRequest<TResponse extends CardPaymentRefundPaymentResponse> extends Request<TResponse> {
        readonly paymentConnectorId: string;
        readonly amount: number;
        readonly tenderInfo: Commerce.Client.Entities.ITenderInfo;
        readonly extensionTransactionProperties: Commerce.Client.Entities.IExtensionTransaction;
        constructor(paymentConnectorId: string, amount: number, tenderInfo: Commerce.Client.Entities.ITenderInfo, extensionTransactionProperties: Commerce.Client.Entities.IExtensionTransaction, correlationId?: string);
    }
}
declare namespace Commerce {
    class CardPaymentRefundPaymentResponse extends ClientResponse<Client.Entities.IPaymentInfo> {
    }
}
declare namespace Commerce {
    class CardPaymentVoidPaymentRequest<TResponse extends CardPaymentVoidPaymentResponse> extends Request<TResponse> {
        readonly paymentConnectorId: string;
        readonly amount: number;
        readonly tenderInfo: Commerce.Client.Entities.ITenderInfo;
        readonly paymentProperties: string;
        readonly paymentServiceAccountId: string;
        readonly extensionTransactionProperties: Commerce.Client.Entities.IExtensionTransaction;
        constructor(paymentConnectorId: string, amount: number, tenderInfo: Commerce.Client.Entities.ITenderInfo, paymentProperties: string, extensionTransactionProperties: Commerce.Client.Entities.IExtensionTransaction, correlationId?: string, paymentServiceAccountId?: string);
    }
}
declare namespace Commerce {
    class CardPaymentVoidPaymentResponse extends ClientResponse<Client.Entities.IPaymentInfo> {
    }
}
declare namespace Commerce {
    class CashDrawerIsOpenRequest<TResponse extends CashDrawerIsOpenResponse> extends Request<TResponse> {
        constructor(correlationId?: string);
    }
}
declare namespace Commerce {
    class CashDrawerIsOpenResponse extends Response {
        readonly isOpen: boolean;
        constructor(isOpen: boolean);
    }
}
declare namespace Commerce {
    class CashDrawerOpenRequest<TResponse extends CashDrawerOpenResponse> extends Request<TResponse> {
        constructor(correlationId?: string);
    }
}
declare namespace Commerce {
    class CashDrawerOpenResponse extends Response {
    }
}
declare namespace Commerce {
    class GetActiveHardwareStationClientRequest<TResponse extends GetActiveHardwareStationClientResponse> extends ClientRequest<TResponse> {
        constructor(correlationId: string);
    }
}
declare namespace Commerce {
    class GetActiveHardwareStationClientResponse extends ClientResponse<Proxy.Entities.IHardwareStation> {
    }
}
declare namespace Commerce {
    class HardwareStationDeviceActionRequest<TResponse extends HardwareStationDeviceActionResponse> extends Request<TResponse> {
        readonly device: string;
        readonly action: string;
        readonly actionData: any;
        constructor(device: string, action: string, actionData: any, correlationId?: string);
    }
}
declare namespace Commerce {
    class HardwareStationDeviceActionResponse extends Response {
        readonly response: any;
        constructor(response: any);
    }
}
declare namespace Commerce {
    class HardwareStationStatusRequest<TResponse extends HardwareStationStatusResponse> extends Request<TResponse> {
        constructor(correlationId?: string);
    }
}
declare namespace Commerce {
    class HardwareStationStatusResponse extends Response {
        readonly isActive: boolean;
        constructor(isActive: boolean);
    }
}
declare namespace Commerce {
    class LineDisplayDisplayLinesRequest<TResponse extends LineDisplayDisplayLinesResponse> extends Request<TResponse> {
        readonly lines: string[];
        constructor(lines: string[], correlationId?: string);
    }
}
declare namespace Commerce {
    class LineDisplayDisplayLinesResponse extends Response {
    }
}
declare namespace Commerce.Peripherals {
    class PaymentTerminalActivateGiftCardPeripheralRequest<TResponse extends PaymentTerminalActivateGiftCardPeripheralResponse> extends Request<TResponse> {
        readonly amount: number;
        readonly tenderInfo: Client.Entities.ITenderInfo;
        readonly paymentConnectorId: string;
        readonly extensionTransactionProperties: Client.Entities.IExtensionTransaction;
        constructor(correlationId: string, amount: number, tenderInfo: Client.Entities.ITenderInfo, paymentConnectorId: string, extensionTransactionProperties?: Client.Entities.IExtensionTransaction);
    }
}
declare namespace Commerce.Peripherals {
    class PaymentTerminalActivateGiftCardPeripheralResponse extends Response {
        readonly paymentInfo: Client.Entities.IPaymentInfo;
        constructor(paymentInfo: Client.Entities.IPaymentInfo);
    }
}
declare namespace Commerce.Peripherals {
    class PaymentTerminalAddBalanceToGiftCardPeripheralRequest<TResponse extends PaymentTerminalAddBalanceToGiftCardPeripheralResponse> extends Request<TResponse> {
        readonly amount: number;
        readonly tenderInfo: Client.Entities.ITenderInfo;
        readonly paymentConnectorId: string;
        readonly extensionTransactionProperties: Client.Entities.IExtensionTransaction;
        constructor(correlationId: string, amount: number, tenderInfo: Client.Entities.ITenderInfo, paymentConnectorId: string, extensionTransactionProperties?: Client.Entities.IExtensionTransaction);
    }
}
declare namespace Commerce.Peripherals {
    class PaymentTerminalAddBalanceToGiftCardPeripheralResponse extends Response {
        readonly paymentInfo: Client.Entities.IPaymentInfo;
        constructor(paymentInfo: Client.Entities.IPaymentInfo);
    }
}
declare namespace Commerce {
    class PaymentTerminalAuthorizePaymentActivityRequest<TResponse extends PaymentTerminalAuthorizePaymentActivityResponse> extends Request<TResponse> {
        readonly paymentConnectorId: string;
        readonly amount: number;
        readonly tenderInfo: Client.Entities.ITenderInfo;
        readonly voiceAuthorization: string;
        readonly isManualEntry: boolean;
        readonly extensionTransactionProperties: Commerce.Client.Entities.IExtensionTransaction;
        readonly paymentTransactionReferenceData: Commerce.Client.Entities.IPaymentTransactionReferenceData;
        constructor(paymentConnectorId: string, amount: number, tenderInfo: Client.Entities.ITenderInfo, voiceAuthorization: string, isManualEntry: boolean, extensionTransactionProperties?: Commerce.Client.Entities.IExtensionTransaction, correlationId?: string, paymentTransactionReferenceData?: Commerce.Client.Entities.IPaymentTransactionReferenceData);
    }
}
declare namespace Commerce {
    class PaymentTerminalAuthorizePaymentActivityResponse extends ClientResponse<Client.Entities.IPaymentInfo> {
    }
}
declare namespace Commerce {
    class PaymentTerminalAuthorizePaymentRequest<TResponse extends PaymentTerminalAuthorizePaymentResponse> extends Request<TResponse> {
        readonly paymentConnectorId: string;
        readonly amount: number;
        readonly tenderInfo: Client.Entities.ITenderInfo;
        readonly voiceAuthorization: string;
        readonly isManualEntry: boolean;
        readonly paymentTransactionReferenceData: Client.Entities.IPaymentTransactionReferenceData;
        readonly extensionTransactionProperties: Commerce.Client.Entities.IExtensionTransaction;
        constructor(paymentConnectorId: string, amount: number, tenderInfo: Client.Entities.ITenderInfo, voiceAuthorization: string, isManualEntry: boolean, extensionTransactionProperties: Commerce.Client.Entities.IExtensionTransaction, correlationId?: string, paymentTransactionReferenceData?: Client.Entities.IPaymentTransactionReferenceData);
    }
}
declare namespace Commerce {
    class PaymentTerminalAuthorizePaymentResponse extends ClientResponse<Client.Entities.IPaymentInfo> {
    }
}
declare namespace Commerce {
    class PaymentTerminalBeginTransactionRequest<TResponse extends PaymentTerminalBeginTransactionResponse> extends Request<TResponse> {
        readonly extensionTransactionProperties?: Client.Entities.IExtensionTransaction;
        constructor(extensionTransactionProperties?: Client.Entities.IExtensionTransaction, correlationId?: string);
    }
}
declare namespace Commerce {
    class PaymentTerminalBeginTransactionResponse extends Response {
    }
}
declare namespace Commerce {
    class PaymentTerminalCancelOperationRequest<TResponse extends PaymentTerminalCancelOperationResponse> extends Request<TResponse> {
        constructor(correlationId?: string);
    }
}
declare namespace Commerce {
    class PaymentTerminalCancelOperationResponse extends Response {
    }
}
declare namespace Commerce {
    class PaymentTerminalCapturePaymentRequest<TResponse extends PaymentTerminalCapturePaymentResponse> extends Request<TResponse> {
        readonly amount: number;
        readonly paymentProperties: string;
        readonly extensionTransactionProperties: Commerce.Client.Entities.IExtensionTransaction;
        constructor(amount: number, paymentProperties: string, extensionTransactionProperties: Commerce.Client.Entities.IExtensionTransaction, correlationId?: string);
    }
}
declare namespace Commerce {
    class PaymentTerminalCapturePaymentResponse extends ClientResponse<Client.Entities.IPaymentInfo> {
    }
}
declare namespace Commerce {
    class PaymentTerminalEndTransactionRequest<TResponse extends PaymentTerminalEndTransactionResponse> extends Request<TResponse> {
        constructor(correlationId?: string);
    }
}
declare namespace Commerce {
    class PaymentTerminalEndTransactionResponse extends Response {
    }
}
declare namespace Commerce {
    class PaymentTerminalEnquireGiftCardBalancePeripheralRequest<TResponse extends PaymentTerminalEnquireGiftCardBalancePeripheralResponse> extends Request<TResponse> {
        readonly paymentConnectorId: string;
        readonly tenderInfo: Client.Entities.ITenderInfo;
        readonly extensionTransactionProperties: Client.Entities.IExtensionTransaction;
        constructor(correlationId: string, paymentConnectorId: string, tenderInfo: Client.Entities.ITenderInfo, extensionTransactionProperties?: Client.Entities.IExtensionTransaction);
    }
}
declare namespace Commerce {
    class PaymentTerminalEnquireGiftCardBalancePeripheralResponse extends Response {
        readonly paymentInfo: Client.Entities.IPaymentInfo;
        constructor(paymentInfo: Client.Entities.IPaymentInfo);
    }
}
declare namespace Commerce {
    class PaymentTerminalExecuteTaskRequest<TResponse extends PaymentTerminalExecuteTaskResponse> extends Request<TResponse> {
        readonly task: string;
        readonly extensionTransactionProperties: Client.Entities.IExtensionTransaction;
        constructor(task: string, extensionTransactionProperties: Client.Entities.IExtensionTransaction, correlationId?: string);
    }
}
declare namespace Commerce {
    class PaymentTerminalExecuteTaskResponse extends ClientResponse<Client.Entities.IPeripheralConfiguration[]> {
    }
}
declare namespace Commerce {
    class PaymentTerminalRefundPaymentActivityRequest<TResponse extends PaymentTerminalRefundPaymentActivityResponse> extends Request<TResponse> {
        readonly paymentConnectorId: string;
        readonly amount: number;
        readonly tenderInfo: Client.Entities.ITenderInfo;
        readonly voiceAuthorization: string;
        readonly isManualEntry: boolean;
        readonly paymentTransactionReferenceData: Commerce.Client.Entities.IPaymentTransactionReferenceData;
        readonly extensionTransactionProperties: Commerce.Client.Entities.IExtensionTransaction;
        constructor(paymentConnectorId: string, amount: number, tenderInfo: Client.Entities.ITenderInfo, voiceAuthorization: string, isManualEntry: boolean, extensionTransactionProperties?: Commerce.Client.Entities.IExtensionTransaction, correlationId?: string, paymentTransactionReferenceData?: Commerce.Client.Entities.IPaymentTransactionReferenceData);
    }
}
declare namespace Commerce {
    class PaymentTerminalRefundPaymentActivityResponse extends ClientResponse<Client.Entities.IPaymentInfo> {
    }
}
declare namespace Commerce {
    class PaymentTerminalRefundPaymentRequest<TResponse extends PaymentTerminalRefundPaymentResponse> extends Request<TResponse> {
        readonly paymentConnectorId: string;
        readonly amount: number;
        readonly tenderInfo: Client.Entities.ITenderInfo;
        readonly isManualEntry: boolean;
        readonly extensionTransactionProperties: Commerce.Client.Entities.IExtensionTransaction;
        constructor(paymentConnectorId: string, amount: number, tenderInfo: Client.Entities.ITenderInfo, isManualEntry: boolean, extensionTransactionProperties: Commerce.Client.Entities.IExtensionTransaction, correlationId?: string);
    }
}
declare namespace Commerce {
    class PaymentTerminalRefundPaymentResponse extends ClientResponse<Client.Entities.IPaymentInfo> {
    }
}
declare namespace Commerce {
    class PaymentTerminalUpdateLinesRequest<TResponse extends PaymentTerminalUpdateLinesResponse> extends Request<TResponse> {
        readonly cart: Proxy.Entities.Cart;
        constructor(cart: Proxy.Entities.Cart, correlationId?: string);
    }
}
declare namespace Commerce {
    class PaymentTerminalUpdateLinesResponse extends Response {
    }
}
declare namespace Commerce {
    class PaymentTerminalVoidPaymentRequest<TResponse extends PaymentTerminalVoidPaymentResponse> extends Request<TResponse> {
        readonly paymentConnectorId: string;
        readonly tenderInfo: Client.Entities.ITenderInfo;
        readonly amount: number;
        readonly paymentProperties: string;
        readonly extensionTransactionProperties: Commerce.Client.Entities.IExtensionTransaction;
        constructor(paymentConnectorId: string, tenderInfo: Client.Entities.ITenderInfo, amount: number, paymentProperties: string, extensionTransactionProperties: Commerce.Client.Entities.IExtensionTransaction, correlationId?: string);
    }
}
declare namespace Commerce {
    class PaymentTerminalVoidPaymentResponse extends ClientResponse<Client.Entities.IPaymentInfo> {
    }
}
declare namespace Commerce {
    class PrinterPrintRequest<TResponse extends PrinterPrintResponse> extends Request<TResponse> {
        readonly receipts: Proxy.Entities.Receipt[];
        constructor(receipts: Proxy.Entities.Receipt[], correlationId?: string);
    }
}
declare namespace Commerce {
    class PrinterPrintResponse extends Response {
    }
}
declare namespace Commerce {
    class ScaleReadRequest<TResponse extends ScaleReadResponse> extends Request<TResponse> {
        constructor(correlationId?: string);
    }
}
declare namespace Commerce {
    class ScaleReadResponse extends Response {
        readonly valueRead: number;
        constructor(valueRead: number);
    }
}
declare namespace Commerce {
    class CreateCustomerServiceResponse extends ServiceResponse {
        readonly customer: Proxy.Entities.Customer;
        constructor(customer: Proxy.Entities.Customer);
    }
}
declare namespace Commerce {
    class CreateCustomerServiceRequest extends ServiceRequest<CreateCustomerServiceResponse> {
        readonly customer: Proxy.Entities.Customer;
        constructor(correlationId: string, customer: Proxy.Entities.Customer);
    }
}
declare namespace Commerce {
    class CreateNonSalesTransactionServiceResponse extends ServiceResponse {
        readonly transaction: Proxy.Entities.NonSalesTransaction;
        constructor(transaction: Proxy.Entities.NonSalesTransaction);
    }
}
declare namespace Commerce {
    class CreateNonSalesTransactionServiceRequest extends ServiceRequest<CreateNonSalesTransactionServiceResponse> {
        readonly transaction: Proxy.Entities.NonSalesTransaction;
        constructor(correlationId: string, transaction: Proxy.Entities.NonSalesTransaction);
    }
}
declare namespace Commerce {
    class GetCommissionSalesGroupsServiceResponse extends ServiceResponse {
        readonly commissionSalesGroups: Proxy.Entities.CommissionSalesGroup[];
        constructor(commissionSalesGroups: Proxy.Entities.CommissionSalesGroup[]);
    }
}
declare namespace Commerce {
    class GetCommissionSalesGroupsServiceRequest<TResponse extends GetCommissionSalesGroupsServiceResponse> extends ServiceRequest<TResponse> {
        constructor(correlationId: string);
    }
}
declare namespace Commerce {
    class GetCurrenciesServiceResponse extends ServiceResponse {
        readonly currencies: Proxy.Entities.Currency[];
        constructor(currencies: Proxy.Entities.Currency[]);
    }
}
declare namespace Commerce {
    class GetCurrenciesServiceRequest extends ServiceRequest<GetCurrenciesServiceResponse> {
        constructor(correlationId: string);
    }
}
declare namespace Commerce.Reports {
    class GetSrsReportDataSetServiceResponse extends ServiceResponse {
        readonly reportDataSet: Proxy.Entities.ReportDataSet;
        constructor(reportDataSet: Proxy.Entities.ReportDataSet);
    }
}
declare namespace Commerce.Reports {
    class GetSrsReportDataSetServiceRequest extends ServiceRequest<GetSrsReportDataSetServiceResponse> {
        readonly reportId: string;
        readonly parameters: Proxy.Entities.CommerceProperty[];
        constructor(correlationId: string, reportId: string, parameters: Proxy.Entities.CommerceProperty[]);
    }
}
declare namespace Commerce {
    class SearchCommissionSalesGroupsServiceResponse extends ServiceResponse {
        readonly commissionSalesGroups: Proxy.Entities.CommissionSalesGroup[];
        constructor(commissionSalesGroups: Proxy.Entities.CommissionSalesGroup[]);
    }
}
declare namespace Commerce {
    class SearchCommissionSalesGroupsServiceRequest<TResponse extends SearchCommissionSalesGroupsServiceResponse> extends ServiceRequest<TResponse> {
        readonly searchText: string;
        readonly pageSize: number;
        readonly skip: number;
        constructor(correlationId: string, searchText: string, pageSize: number, skip: number);
    }
}
declare namespace Commerce {
    class UpdateCustomerServiceResponse extends ServiceResponse {
        readonly customer: Proxy.Entities.Customer;
        constructor(customer: Proxy.Entities.Customer);
    }
}
declare namespace Commerce {
    class UpdateCustomerServiceRequest extends ServiceRequest<UpdateCustomerServiceResponse> {
        readonly customer: Proxy.Entities.Customer;
        constructor(correlationId: string, customer: Proxy.Entities.Customer);
    }
}
declare namespace Commerce.CashManagement {
    class CreateCashManagementTransactionClientResponseBase extends ClientResponse<Proxy.Entities.NonSalesTransaction> {
    }
}
declare namespace Commerce.CashManagement {
    abstract class CreateCashManagementTransactionClientRequestBase<TResponse extends CreateCashManagementTransactionClientResponseBase> extends ClientRequest<TResponse> {
        readonly isOperationAborted: boolean;
        readonly amountEntered: number;
        readonly denominationDetails: Proxy.Entities.DenominationDetail[];
        readonly operationComment: string;
        readonly shift: Proxy.Entities.Shift;
        constructor(isOperationAborted: boolean, amountEntered: number, denominationDetails: Proxy.Entities.DenominationDetail[], operationComment: string, shift: Proxy.Entities.Shift, correlationId: string);
    }
}
declare namespace Commerce.CashManagement {
    class CreateFloatEntryTransactionClientRequest<TResponse extends CreateFloatEntryTransactionClientResponse> extends CreateCashManagementTransactionClientRequestBase<TResponse> {
        fromShift?: Proxy.Entities.Shift;
        constructor(isOperationAborted: boolean, amountEntered: number, denominationDetails: Proxy.Entities.DenominationDetail[], operationComment: string, shift: Proxy.Entities.Shift, correlationId: string, fromShift?: Proxy.Entities.Shift);
    }
}
declare namespace Commerce.CashManagement {
    class CreateFloatEntryTransactionClientResponse extends CreateCashManagementTransactionClientResponseBase {
    }
}
declare namespace Commerce.CashManagement {
    class CreateStartingAmountTransactionClientRequest<TResponse extends CreateStartingAmountTransactionClientResponse> extends CreateCashManagementTransactionClientRequestBase<TResponse> {
        fromStoreSafe?: Proxy.Entities.StoreSafe;
        constructor(isOperationAborted: boolean, amountEntered: number, denominationDetails: Proxy.Entities.DenominationDetail[], operationComment: string, shift: Proxy.Entities.Shift, correlationId: string, fromStoreSafe?: Proxy.Entities.StoreSafe);
    }
}
declare namespace Commerce.CashManagement {
    class CreateStartingAmountTransactionClientResponse extends CreateCashManagementTransactionClientResponseBase {
    }
}
declare namespace Commerce.CashManagement {
    class CreateTenderRemovalTransactionClientRequest<TResponse extends CreateTenderRemovalTransactionClientResponse> extends CreateCashManagementTransactionClientRequestBase<TResponse> {
        toShift?: Proxy.Entities.Shift;
        constructor(isOperationAborted: boolean, amountEntered: number, denominationDetails: Proxy.Entities.DenominationDetail[], operationComment: string, shift: Proxy.Entities.Shift, correlationId: string, toShift?: Proxy.Entities.Shift);
    }
}
declare namespace Commerce.CashManagement {
    class CreateTenderRemovalTransactionClientResponse extends CreateCashManagementTransactionClientResponseBase {
    }
}
declare namespace Commerce.Customers {
    class SelectCustomerClientResponse extends ClientResponse<Proxy.Entities.Customer> {
    }
}
declare namespace Commerce.Customers {
    class SelectCustomerClientRequest<TResponse extends SelectCustomerClientResponse> extends ClientRequest<TResponse> {
        readonly searchText?: string;
        constructor(correlationId: string, searchText?: string);
    }
}
declare namespace Commerce.Products {
    class GetCurrentProductCatalogStoreClientResponse extends ClientResponse<void> {
        readonly store: Proxy.Entities.OrgUnit;
        readonly context: Proxy.Entities.ProjectionDomain;
        constructor(store: Proxy.Entities.OrgUnit, context: Proxy.Entities.ProjectionDomain);
    }
}
declare namespace Commerce.Products {
    class GetCurrentProductCatalogStoreClientRequest<TResponse extends GetCurrentProductCatalogStoreClientResponse> extends ClientRequest<TResponse> {
        constructor(correlationId?: string);
    }
}
declare namespace Commerce.Products {
    class GetProductsByIdsClientResponse extends ClientResponse<Proxy.Entities.SimpleProduct[]> {
        readonly products: Proxy.Entities.SimpleProduct[];
        constructor(products: Proxy.Entities.SimpleProduct[]);
    }
}
declare namespace Commerce.Products {
    class GetProductsByIdsClientRequest<TResponse extends GetProductsByIdsClientResponse> extends ClientRequest<TResponse> {
        readonly productIds: number[];
        constructor(productIds: number[], correlationId?: string);
    }
}
declare namespace Commerce.Products {
    class GetSerialNumberClientResponse extends ClientResponse<string> {
    }
}
declare namespace Commerce.Products {
    class GetSerialNumberClientRequest<TResponse extends GetSerialNumberClientResponse> extends ClientRequest<TResponse> {
        readonly product: Proxy.Entities.SimpleProduct;
        constructor(product: Proxy.Entities.SimpleProduct, correlationId?: string);
    }
}
declare namespace Commerce.Products {
    class SelectProductClientResponse extends ClientResponse<Proxy.Entities.SimpleProduct> {
    }
}
declare namespace Commerce.Products {
    class SelectProductClientRequest<TResponse extends SelectProductClientResponse> extends ClientRequest<TResponse> {
        readonly searchText?: string;
        constructor(correlationId: string, searchText?: string);
    }
}
declare namespace Commerce.Products {
    class SelectProductVariantClientResponse extends ClientResponse<Proxy.Entities.SimpleProduct> {
    }
}
declare namespace Commerce.Products {
    class SelectProductVariantClientRequest<TResponse extends SelectProductVariantClientResponse> extends ClientRequest<TResponse> {
        readonly productMaster: Proxy.Entities.SimpleProduct;
        readonly preSelectedDimensions: Proxy.Entities.ProductDimension[];
        constructor(productMaster: Proxy.Entities.SimpleProduct, preSelectedDimensions?: Proxy.Entities.ProductDimension[], correlationId?: string);
    }
}
declare namespace Commerce.SalesOrders {
    interface IGiftReceiptsResult {
        receipts: Proxy.Entities.Receipt[];
        selectedSalesLines: Proxy.Entities.SalesLine[];
    }
    class GetGiftReceiptsClientResponse extends ClientResponse<IGiftReceiptsResult> {
    }
}
declare namespace Commerce.SalesOrders {
    class GetGiftReceiptsClientRequest<TResponse extends GetGiftReceiptsClientResponse> extends ClientRequest<TResponse> {
        readonly salesOrder: Proxy.Entities.SalesOrder;
        readonly productsInSalesOrder: Proxy.Entities.SimpleProduct[];
        readonly isCopyOfReceipt: boolean;
        readonly isPreview: boolean;
        constructor(correlationId: string, salesOrder: Proxy.Entities.SalesOrder, productsInSalesOrder: Proxy.Entities.SimpleProduct[], isCopyOfReceipt: boolean, isPreview: boolean);
    }
}
declare namespace Commerce.SalesOrders {
    class SelectCustomerOrderTypeClientResponse extends ClientResponse<Proxy.Entities.CustomerOrderType> {
    }
}
declare namespace Commerce.SalesOrders {
    class SelectCustomerOrderTypeClientRequest extends ClientRequest<SelectCustomerOrderTypeClientResponse> {
        constructor(correlationId: string);
    }
}
declare namespace Commerce.TenderCounting {
    class CreateTenderCountingTransactionClientResponseBase extends ClientResponse<Proxy.Entities.DropAndDeclareTransaction> {
    }
}
declare namespace Commerce.TenderCounting {
    abstract class CreateTenderCountingTransactionClientRequestBase<TResponse extends CreateTenderCountingTransactionClientResponseBase> extends ClientRequest<TResponse> {
        readonly isOperationAborted: boolean;
        readonly shift: Proxy.Entities.Shift;
        readonly tenderDetailLines: Proxy.Entities.TenderDetail[];
        constructor(isOperationAborted: boolean, shift: Proxy.Entities.Shift, tenderDetailLines: Proxy.Entities.TenderDetail[], correlationId?: string);
    }
}
declare namespace Commerce.TenderCounting {
    class CreateBankDropTransactionClientRequest<TResponse extends CreateBankDropTransactionClientResponse> extends CreateTenderCountingTransactionClientRequestBase<TResponse> {
        readonly bankBagNumber: string;
        constructor(isOperationAborted: boolean, shift: Proxy.Entities.Shift, tenderDetailLines: Proxy.Entities.TenderDetail[], bankBagNumber: string, correlationId: string);
    }
}
declare namespace Commerce.TenderCounting {
    class CreateBankDropTransactionClientResponse extends CreateTenderCountingTransactionClientResponseBase {
    }
}
declare namespace Commerce.TenderCounting {
    class CreateSafeDropTransactionClientRequest<TResponse extends CreateSafeDropTransactionClientResponse> extends CreateTenderCountingTransactionClientRequestBase<TResponse> {
        readonly extensionProperties: Proxy.Entities.CommerceProperty[];
        constructor(isOperationAborted: boolean, shift: Proxy.Entities.Shift, tenderDetailLines: Proxy.Entities.TenderDetail[], extensionProperties?: Proxy.Entities.CommerceProperty[], correlationId?: string);
    }
}
declare namespace Commerce.TenderCounting {
    class CreateSafeDropTransactionClientResponse extends CreateTenderCountingTransactionClientResponseBase {
    }
}
declare namespace Commerce.TenderCounting {
    class CreateTenderDeclarationTransactionClientResponse extends CreateTenderCountingTransactionClientResponseBase {
    }
}
declare namespace Commerce.TenderCounting {
    class CreateTenderDeclarationTransactionClientRequest<TResponse extends CreateTenderDeclarationTransactionClientResponse> extends CreateTenderCountingTransactionClientRequestBase<TResponse> {
        readonly reasonCodeLines: Proxy.Entities.ReasonCodeLine[];
        constructor(correlationId: string, isOperationAborted: boolean, shift: Proxy.Entities.Shift, tenderDetailLines: Proxy.Entities.TenderDetail[], reasonCodeLines: Proxy.Entities.ReasonCodeLine[]);
    }
}
declare namespace Commerce.Products {
    class GetRefinerValuesByTextServiceResponse extends ServiceResponse {
        readonly productRefinerValues: Proxy.Entities.ProductRefinerValue[];
        constructor(productRefinerValues: Proxy.Entities.ProductRefinerValue[]);
    }
}
declare namespace Commerce.Products {
    class GetRefinerValuesByTextServiceRequest<TResponse extends GetRefinerValuesByTextServiceResponse> extends ServiceRequest<TResponse> {
        readonly searchText: string;
        readonly productRefiner: Proxy.Entities.ProductRefiner;
        constructor(correlationId: string, searchText: string, productRefiner: Proxy.Entities.ProductRefiner);
    }
}
declare namespace Commerce.SalesOrders {
    class MarkAsPickedServiceResponse extends ServiceResponse {
    }
}
declare namespace Commerce.SalesOrders {
    class MarkAsPickedServiceRequest<TResponse extends MarkAsPickedServiceResponse> extends ServiceRequest<TResponse> {
        readonly fulfillmentLines: Proxy.Entities.FulfillmentLineParameter[];
        constructor(correlationId: string, fulfillmentLines: Proxy.Entities.FulfillmentLineParameter[]);
    }
}

declare namespace Commerce.ViewModels {
    namespace DataList {
        interface IDataListColumn {
            title?: string;
            titleResx?: string;
            computeValue?: (row: any) => any;
            field?: string;
            converter?: string;
            ratio: number;
            originalRatio?: number;
            collapseOrder: number;
            minWidth: number;
            isSecondaryTitleHidden?: boolean;
            isRightAligned?: boolean;
            type?: string;
        }
    }
}
declare namespace Commerce.ViewModels {
    interface IDataListViewModel {
        selectItems(indexes: number[]): void;
        selectAll(): void;
    }
}
declare namespace Commerce.Extensibility {
    interface ICustomListColumn<T> {
        title: string;
        computeValue: (rowData: T) => string;
        ratio: number;
        collapseOrder: number;
        minWidth: number;
        isRightAligned?: boolean;
    }
    type CustomListColumnSet<T> = ICustomListColumn<T>[];
    type CustomizableColumnSet<T> = ViewModels.DataList.IDataListColumn[] | Extensibility.CustomListColumnSet<T>;
}
declare namespace Commerce.Extensibility {
    interface IExtensionCommandMessageTypeMap {
        "CanExecuteChanged": boolean;
        "VisibilityChanged": boolean;
        "IsProcessingChanged": boolean;
    }
}
declare namespace Commerce.Extensibility {
    interface IExtensionViewControllerMessageTypeMap {
    }
}
declare namespace Commerce.Extensibility {
    interface IAddressAddEditCustomControlState extends ICustomControlState {
        customer: Proxy.Entities.Customer;
        address: Proxy.Entities.Address;
    }
    type AddressAddEditAddressUpdatedData = {
        address: Proxy.Entities.Address;
    };
    interface IAddressAddEditToCustomControlMessageTypeMap extends IViewToExtensionCommandMessageTypeMap {
        "Initialize": IAddressAddEditCustomControlState;
        "AddressUpdated": AddressAddEditAddressUpdatedData;
    }
    type AddressAddEditUpdateAddressData = {
        address: Proxy.Entities.Address;
    };
    interface ICustomControlToAddressAddEditMessageTypeMap extends ICustomControlToViewMessageTypeMap {
        "VisibilityChanged": boolean;
        "UpdateAddress": AddressAddEditUpdateAddressData;
    }
}
declare namespace Commerce.Extensibility {
    type CartLineSelectedData = {
        cartLines: Proxy.Entities.CartLine[];
    };
    type TenderLineSelectedData = {
        tenderLines: Proxy.Entities.TenderLine[];
    };
    type CartChangedData = {
        cart: Proxy.Entities.Cart;
        customer?: Proxy.Entities.Customer;
        loyaltyCard?: Proxy.Entities.LoyaltyCard;
        products?: Proxy.Entities.SimpleProduct[];
    };
    interface ICartViewToExtensionMessageTypeMap {
        "CartChanged": CartChangedData;
        "CartLineSelected": CartLineSelectedData;
        "CartLineSelectionCleared": void;
        "TenderLineSelected": TenderLineSelectedData;
        "TenderLineSelectionCleared": void;
        "ProcessingAddItemOrCustomerChanged": boolean;
    }
    interface ICartViewToExtensionViewControllerMessageTypeMap extends ICartViewToExtensionMessageTypeMap, IViewToExtensionViewControllerMessageTypeMap {
    }
    interface ICartViewCustomControlState extends ICustomControlState {
        cart: Proxy.Entities.Cart;
        customer?: Proxy.Entities.Customer;
        loyaltyCard?: Proxy.Entities.LoyaltyCard;
        products?: Proxy.Entities.SimpleProduct[];
    }
    interface ICartViewToCustomControlMessageTypeMap extends ICartViewToExtensionMessageTypeMap, IViewToExtensionCommandMessageTypeMap {
        "Initialize": ICartViewCustomControlState;
    }
    interface ICustomControlToCartViewMessageTypeMap extends ICustomControlToViewMessageTypeMap {
    }
    interface ICartViewTotalsPanelCustomField {
        computeValue(cart: Proxy.Entities.Cart): string;
    }
}
declare namespace Commerce.Extensibility {
    interface ICustomControl {
        id: string;
        onReady(element: HTMLElement): void;
    }
    interface ICustomControlState {
    }
    interface IViewToCustomControlMessageTypeMap {
        "Initialize": ICustomControlState;
        "Dispose": void;
    }
    interface ICustomControlToViewMessageTypeMap {
        "IsProcessingChanged": boolean;
    }
}
declare namespace Commerce.Extensibility {
    type CustomerAddEditCustomerUpdatedData = {
        customer: Proxy.Entities.Customer;
    };
    type CustomerAddEditCustomerChangedData = {
        customer: Proxy.Entities.Customer;
    };
    interface ICustomerAddEditToExtensionMessageTypeMap {
        "CustomerUpdated": CustomerAddEditCustomerUpdatedData;
    }
    interface ICustomerAddEditToExtensionCommandMessageTypeMap extends IViewToExtensionCommandMessageTypeMap, ICustomerAddEditToExtensionMessageTypeMap {
        "Initialize": ICustomerAddEditExtensionCommandState;
    }
    interface IExtensionToCustomerAddEditMessageTypeMap {
        "CustomerChanged": CustomerAddEditCustomerChangedData;
    }
    interface IExtensionCommandToCustomerAddEditMessageTypeMap extends IExtensionCommandMessageTypeMap, IExtensionToCustomerAddEditMessageTypeMap {
    }
    interface ICustomerAddEditExtensionCommandState extends IExtensionCommandState {
        isNewCustomer: boolean;
        customer: Proxy.Entities.Customer;
        isSelectionMode: boolean;
    }
    interface ICustomerAddEditCustomControlState extends ICustomControlState {
        isNewCustomer: boolean;
        customer: Proxy.Entities.Customer;
        isSelectionMode: boolean;
    }
    interface ICustomerAddEditToCustomControlMessageTypeMap extends IViewToExtensionCommandMessageTypeMap, ICustomerAddEditToExtensionMessageTypeMap {
        "Initialize": ICustomerAddEditCustomControlState;
    }
    interface ICustomControlToCustomerAddEditMessageTypeMap extends ICustomControlToViewMessageTypeMap, IExtensionToCustomerAddEditMessageTypeMap {
        "VisibilityChanged": boolean;
    }
}
declare namespace Commerce.Extensibility {
    type CustomerDetailsAffiliationAddedData = {
        affiliations: Proxy.Entities.CustomerAffiliation[];
    };
    type CustomerDetailsWishListsLoadedData = {
        wishLists: Proxy.Entities.CommerceList[];
    };
    type CustomerDetailsLoyaltyCardsLoadedData = {
        loyaltyCards: Proxy.Entities.LoyaltyCard[];
    };
    interface ICustomerDetailsToExtensionMessageTypeMap {
        "AffiliationAdded": CustomerDetailsAffiliationAddedData;
        "LoyaltyCardsLoaded": CustomerDetailsLoyaltyCardsLoadedData;
        "WishListsLoaded": CustomerDetailsWishListsLoadedData;
    }
    interface ICustomerDetailsToExtensionCommandMessageTypeMap extends IViewToExtensionCommandMessageTypeMap, ICustomerDetailsToExtensionMessageTypeMap {
        "Initialize": ICustomerDetailsExtensionCommandState;
    }
    interface ICustomerDetailsExtensionCommandState extends IExtensionCommandState {
        customer: Proxy.Entities.Customer;
        isSelectionMode: boolean;
    }
    interface ICustomerDetailsCustomControlState extends ICustomControlState {
        customer: Proxy.Entities.Customer;
        isSelectionMode: boolean;
    }
    interface ICustomerDetailsToCustomControlMessageTypeMap extends IViewToCustomControlMessageTypeMap, ICustomerDetailsToExtensionMessageTypeMap {
        "Initialize": ICustomerDetailsCustomControlState;
    }
    interface ICustomControlToCustomerDetailsMessageTypeMap extends ICustomControlToViewMessageTypeMap {
        "VisibilityChanged": boolean;
    }
}
declare namespace Commerce.Extensibility.DualDisplayExtensionTypes {
    interface IDualDisplayToExtensionMessageTypeMap {
        "CartChanged": CartChangedData;
        "CustomerChanged": CustomerChangedData;
        "LogOnStatusChanged": LogOnStatusChangedData;
    }
    type CartChangedData = {
        cart: Proxy.Entities.Cart;
    };
    type CustomerChangedData = {
        customer: Proxy.Entities.Customer;
    };
    type LogOnStatusChangedData = {
        loggedOn: boolean;
        employee: Proxy.Entities.Employee;
    };
    interface IDualDisplayCustomControlState extends ICustomControlState {
        cart: Proxy.Entities.Cart;
        customer: Proxy.Entities.Customer;
        loggedOn: boolean;
        employee: Proxy.Entities.Employee;
    }
    interface IDualDisplayToCustomControlMessageTypeMap extends IDualDisplayToExtensionMessageTypeMap, IViewToExtensionCommandMessageTypeMap {
        "Initialize": IDualDisplayCustomControlState;
    }
    interface ICustomControlToDualDisplayMessageTypeMap extends ICustomControlToViewMessageTypeMap {
    }
}
declare namespace Commerce.Extensibility {
    interface IExtensionCommandState {
    }
    interface IViewToExtensionCommandMessageTypeMap {
        "Initialize": IExtensionCommandState;
        "Execute": void;
        "Dispose": void;
    }
    interface IExtensionCommand {
        extraClass: string;
        id: string;
        label: string;
    }
}
declare namespace Commerce.Extensibility {
    interface IExtensionMenuCommandState {
    }
    interface IExtensionMenuCommandMessageTypeMap {
        "CanExecuteChanged": boolean;
        "IsProcessingChanged": boolean;
    }
    interface IViewToExtensionMenuCommandMessageTypeMap {
        "Initialize": IExtensionMenuCommandState;
        "Execute": void;
        "Dispose": void;
    }
    interface IExtensionMenuCommand {
        id: string;
        label: string;
    }
}
declare namespace Commerce.Extensibility {
    interface IViewToExtensionViewControllerMessageTypeMap {
    }
    interface IExtensionViewController {
    }
}
declare namespace Commerce.Extensibility {
    type FulfillmentLinesSelectedData = {
        fulfillmentLines: Proxy.Entities.FulfillmentLine[];
    };
    type FulfillmentLinePackingSlipSelectedData = {
        packingSlipData: Proxy.Entities.PackingSlipData;
        packingSlips: Proxy.Entities.Receipt[];
    };
    interface IFulfillmentLineToExtensionCommandMessageTypeMap extends IViewToExtensionCommandMessageTypeMap {
        "Initialize": IFulfillmentLineExtensionCommandState;
        "FulfillmentLinesSelected": FulfillmentLinesSelectedData;
        "FulfillmentLinesSelectionCleared": void;
        "PackingSlipSelected": FulfillmentLinePackingSlipSelectedData;
        "PackingSlipSelectionCleared": void;
    }
    interface IExtensionToFulfillmentLineMessageTypeMap {
        "RefreshFulfillmentLines": void;
    }
    interface IExtensionCommandToFulfillmentLineMessageTypeMap extends IExtensionCommandMessageTypeMap, IExtensionToFulfillmentLineMessageTypeMap {
    }
    interface IFulfillmentLineExtensionCommandState extends IExtensionCommandState {
        fulfillmentDeliveryType: Proxy.Entities.FulfillmentLineDeliveryType;
    }
}
declare namespace Commerce.Extensibility {
    type InventoryLookupProductChangedData = {
        product: Proxy.Entities.SimpleProduct;
        locationAvailabilities: Proxy.Entities.OrgUnitAvailability[];
    };
    type InventoryLookupLocationSelectedData = {
        locationAvailability: Proxy.Entities.OrgUnitAvailability;
    };
    interface IInventoryLookupToExtensionCommandMessageTypeMap extends IViewToExtensionCommandMessageTypeMap {
        "Initialize": IInventoryLookupExtensionCommandState;
        "ProductChanged": InventoryLookupProductChangedData;
        "LocationSelected": InventoryLookupLocationSelectedData;
        "LocationSelectionCleared": void;
    }
    interface IExtensionToInventoryLookupMessageTypeMap {
    }
    interface IExtensionCommandToInventoryLookupMessageTypeMap extends IExtensionCommandMessageTypeMap, IExtensionToInventoryLookupMessageTypeMap {
    }
    interface IInventoryLookupExtensionCommandState extends IExtensionCommandState {
        product: Proxy.Entities.SimpleProduct;
        locationAvailabilities: Proxy.Entities.OrgUnitAvailability[];
    }
}
declare namespace Commerce.Extensibility {
    type InventoryLookupMatrixItemAvailabilitySelectedData = {
        itemAvailability: Proxy.Entities.ItemAvailability;
    };
    type InventoryLookupMatrixStoreChangedData = {
        store: Proxy.Entities.OrgUnit;
    };
    interface IInventoryLookupMatrixToExtensionMenuCommandMessageTypeMap extends IViewToExtensionMenuCommandMessageTypeMap {
        "Initialize": IInventoryLookupMatrixExtensionMenuCommandState;
        "ItemAvailabilitySelected": InventoryLookupMatrixItemAvailabilitySelectedData;
        "StoreChanged": InventoryLookupMatrixStoreChangedData;
    }
    interface IExtensionToInventoryLookupMatrixMessageTypeMap {
    }
    interface IExtensionMenuCommandToInventoryLookupMatrixMessageTypeMap extends IExtensionMenuCommandMessageTypeMap, IExtensionToInventoryLookupMatrixMessageTypeMap {
    }
    interface IInventoryLookupMatrixExtensionMenuCommandState extends IExtensionMenuCommandState {
        masterProduct: Proxy.Entities.SimpleProduct;
        productDimensionCombinations: Proxy.Entities.ProductDimensionCombination[];
        store: Proxy.Entities.OrgUnit;
    }
}
declare namespace Commerce.Extensibility {
    type ShiftSelectedData = {
        selectedShift: Proxy.Entities.Shift;
        selectedShifts: Proxy.Entities.Shift[];
    };
    interface IManageShiftsToExtensionCommandMessageTypeMap extends IViewToExtensionCommandMessageTypeMap {
        "Initialize": IManageShiftsExtensionCommandState;
        "ShiftSelected": ShiftSelectedData;
        "ShiftSelectionCleared": void;
    }
    interface IExtensionToManageShiftsMessageTypeMap {
    }
    interface IExtensionCommandToManageShiftsMessageTypeMap extends IExtensionCommandMessageTypeMap, IExtensionToManageShiftsMessageTypeMap {
    }
    interface IManageShiftsExtensionCommandState extends IExtensionCommandState {
        nonClosedShifts: Proxy.Entities.Shift[];
    }
}
declare namespace Commerce.Extensibility {
    type PaymentViewPaymentCardChanged = {
        paymentCard: Proxy.Entities.PaymentCard;
    };
    type PaymentViewAmountChanged = {
        paymentAmount: string;
    };
    interface IPaymentViewToExtensionCommandMessageTypeMap extends IViewToExtensionCommandMessageTypeMap {
        "Initialize": IPaymentViewExtensionCommandState;
        "PaymentCardChanged": PaymentViewPaymentCardChanged;
        "PaymentAmountChanged": PaymentViewAmountChanged;
    }
    interface IExtensionCommandToPaymentViewMessageTypeMap extends IExtensionCommandMessageTypeMap {
    }
    interface IPaymentViewExtensionCommandState extends IExtensionCommandState {
        tenderType: Proxy.Entities.TenderType;
        fullAmount: number;
        currency: Proxy.Entities.Currency;
    }
}
declare namespace Commerce.Extensibility {
    type JournalSavedData = {
        journal: Client.Entities.IPickingAndReceivingOrder;
    };
    type JournalLineSelectedData = {
        journalLine: Client.Entities.IPickingAndReceivingOrderLine;
    };
    type JournalLinesChangedData = {
        journalLines: Client.Entities.IPickingAndReceivingOrderLine[];
    };
    type PickingAndReceivingDetailsReceiptSelectedData = {
        receipt: Proxy.Entities.Receipt;
    };
    interface IPickingAndReceivingDetailsToExtensionCommandMessageTypeMap extends IViewToExtensionCommandMessageTypeMap {
        "Initialize": IPickingAndReceivingDetailsExtensionCommandState;
        "JournalSaved": JournalSavedData;
        "JournalLineSelected": JournalLineSelectedData;
        "JournalLineSelectionCleared": void;
        "JournalLinesChanged": JournalLinesChangedData;
        "ReceiptSelected": PickingAndReceivingDetailsReceiptSelectedData;
        "ReceiptSelectionCleared": void;
    }
    interface IExtensionToPickingAndReceivingDetailsMessageTypeMap {
    }
    interface IExtensionCommandToPickingAndReceivingDetailsMessageTypeMap extends IExtensionCommandMessageTypeMap, IExtensionToPickingAndReceivingDetailsMessageTypeMap {
    }
    interface IPickingAndReceivingDetailsExtensionCommandState extends IExtensionCommandState {
        journal: Client.Entities.IPickingAndReceivingOrder;
    }
}
declare namespace Commerce.Extensibility {
    type PriceCheckPriceCheckCompletedData = {
        product: Proxy.Entities.SimpleProduct;
        productPrice: Proxy.Entities.ProductPrice;
    };
    type PriceCheckCustomerChangedData = {
        customer: Proxy.Entities.Customer;
    };
    interface IPriceCheckToExtensionMessageTypeMap {
        "PriceCheckCompleted": PriceCheckPriceCheckCompletedData;
        "CustomerChanged": PriceCheckCustomerChangedData;
    }
    interface IPriceCheckCustomControlState extends ICustomControlState {
        product: Proxy.Entities.SimpleProduct;
        productPrice: Proxy.Entities.ProductPrice;
        customer: Proxy.Entities.Customer;
    }
    interface IPriceCheckToCustomControlMessageTypeMap extends IViewToCustomControlMessageTypeMap, IPriceCheckToExtensionMessageTypeMap {
        "Initialize": IPriceCheckCustomControlState;
    }
    interface ICustomControlToPriceCheckMessageTypeMap extends ICustomControlToViewMessageTypeMap {
        "VisibilityChanged": boolean;
    }
}
declare namespace Commerce.Extensibility {
    type ReportDataLoadedData = {
        reportDataSet: Proxy.Entities.ReportDataSet;
    };
    interface IReportDetailsToExtensionCommandMessageTypeMap extends IViewToExtensionCommandMessageTypeMap {
        "Initialize": IReportDetailsExtensionCommandState;
        "ReportDataLoadedData": ReportDataLoadedData;
    }
    interface IExtensionToReportDetailsMessageTypeMap {
    }
    interface IExtensionCommandToReportDetailsMessageTypeMap extends IExtensionCommandMessageTypeMap, IExtensionToReportDetailsMessageTypeMap {
    }
    interface IReportDetailsExtensionCommandState extends IExtensionCommandState {
        reportTitle: string;
        reportId: string;
    }
}
declare namespace Commerce.Extensibility {
    type ReturnTransactionTransactionLineSelectedData = {
        salesLines: Proxy.Entities.SalesLine[];
    };
    type ReturnTransactionTransactionSelectedData = {
        salesOrder: Proxy.Entities.SalesOrder;
    };
    interface IReturnTransactionToExtensionCommandMessageTypeMap extends IViewToExtensionCommandMessageTypeMap {
        "Initialize": IReturnTransactionExtensionCommandState;
        "TransactionLineSelected": ReturnTransactionTransactionLineSelectedData;
        "TransactionLineSelectionCleared": void;
        "TransactionSelected": ReturnTransactionTransactionSelectedData;
        "TransactionSelectionCleared": void;
    }
    interface IExtensionToReturnTransactionMessageTypeMap {
    }
    interface IExtensionCommandToReturnTransactionMessageTypeMap extends IExtensionCommandMessageTypeMap, IExtensionToReturnTransactionMessageTypeMap {
    }
    interface IReturnTransactionExtensionCommandState extends IExtensionCommandState {
        receiptNumber: string;
        salesOrder: Proxy.Entities.SalesOrder;
    }
}
declare namespace Commerce.Extensibility {
    type SearchOrdersSelectedData = {
        salesOrder: Proxy.Entities.SalesOrder;
    };
    interface ISearchOrdersToExtensionCommandMessageTypeMap extends IViewToExtensionCommandMessageTypeMap {
        "Initialize": ISerchOrdersExtensionCommandState;
        "OrderSelected": SearchOrdersSelectedData;
        "OrderSelectionCleared": void;
    }
    interface IExtensionToSearchOrdersMessageTypeMap {
    }
    interface IExtensionCommandToSearchOrdersMessageTypeMap extends IExtensionCommandMessageTypeMap, IExtensionToSearchOrdersMessageTypeMap {
    }
    interface ISerchOrdersExtensionCommandState extends IExtensionCommandState {
    }
}
declare namespace Commerce.Extensibility {
    type OrderLineSelectedData = {
        order: Client.Entities.IPickingAndReceivingOrder;
    };
    interface ISearchPickingAndReceivingToExtensionCommandMessageTypeMap extends IViewToExtensionCommandMessageTypeMap {
        "Initialize": ISearchPickingAndReceivingExtensionCommandState;
        "OrderLineSelected": OrderLineSelectedData;
        "OrderLineSelectionCleared": void;
    }
    interface IExtensionToSearchPickingAndReceivingMessageTypeMap {
    }
    interface IExtensionCommandToSearchPickingAndReceivingMessageTypeMap extends IExtensionCommandMessageTypeMap, IExtensionToSearchPickingAndReceivingMessageTypeMap {
    }
    interface ISearchPickingAndReceivingExtensionCommandState extends IExtensionCommandState {
    }
}
declare namespace Commerce.Extensibility {
    interface IProductSearchExtensionCommandState extends IExtensionCommandState {
        searchText: string;
        isSelectionMode: boolean;
        productSearchResults: Proxy.Entities.ProductSearchResult[];
    }
    type ProductSearchSearchResultsLoadedData = {
        searchText: string;
        productSearchResults: Proxy.Entities.ProductSearchResult[];
    };
    type ProductSearchSearchResultSelectedData = {
        productSearchResults: Proxy.Entities.ProductSearchResult[];
    };
    interface IProductSearchToExtensionCommandMessageTypeMap extends IViewToExtensionCommandMessageTypeMap {
        "Initialize": IProductSearchExtensionCommandState;
        "SearchResultsLoaded": ProductSearchSearchResultsLoadedData;
        "SearchResultSelected": ProductSearchSearchResultSelectedData;
        "SearchResultSelectionCleared": void;
    }
    interface ICustomerSearchExtensionCommandState extends IExtensionCommandState {
        searchText: string;
        isSelectionMode: boolean;
    }
    type CustomerSearchSearchResultsLoadedData = {
        searchText: string;
        customers: Proxy.Entities.GlobalCustomer[];
    };
    type CustomerSearchSearchResultSelectedData = {
        customers: Proxy.Entities.GlobalCustomer[];
    };
    interface ICustomerSearchToExtensionCommandMessageTypeMap extends IViewToExtensionCommandMessageTypeMap {
        "Initialize": ICustomerSearchExtensionCommandState;
        "SearchResultsLoaded": CustomerSearchSearchResultsLoadedData;
        "SearchResultSelected": CustomerSearchSearchResultSelectedData;
        "SearchResultSelectionCleared": void;
    }
}
declare namespace Commerce.Extensibility {
    type ShowJournalJournalSelectedData = {
        salesOrder: Proxy.Entities.SalesOrder;
        products: Proxy.Entities.SimpleProduct[];
        customer?: Proxy.Entities.Customer;
    };
    type ShowJournalReceiptSelectedData = {
        isGiftReceipt: boolean;
    };
    type ShowJournalJournalTransactionsLoadedData = {
        transactionSearchCriteria: Proxy.Entities.TransactionSearchCriteria;
        loadedTransactions: Proxy.Entities.Transaction[];
        pageSize: number;
        skip: number;
    };
    interface IShowJournalToExtensionCommandMessageTypeMap extends IViewToExtensionCommandMessageTypeMap {
        "Initialize": IShowJournalExtensionCommandState;
        "JournalSelected": ShowJournalJournalSelectedData;
        "JournalSelectionCleared": void;
        "ReceiptSelected": ShowJournalReceiptSelectedData;
        "ReceiptSelectionCleared": void;
        "JournalTransactionsLoaded": ShowJournalJournalTransactionsLoadedData;
    }
    interface IShowJournalExtensionCommandState extends IExtensionCommandState {
        mode: Commerce.Client.Entities.ShowJournalMode;
        customer?: Proxy.Entities.Customer;
        selectedSalesOrderHeader?: Proxy.Entities.SalesOrder;
    }
}
declare namespace Commerce.Extensibility {
    type SimpleProductDetailsProductChangedData = {
        product: Proxy.Entities.SimpleProduct;
    };
    interface ISimpleProductDetailsToExtensionMessageTypeMap {
        "ProductChanged": SimpleProductDetailsProductChangedData;
    }
    interface ISimpleProductDetailsToExtensionCommandMessageTypeMap extends IViewToExtensionCommandMessageTypeMap, ISimpleProductDetailsToExtensionMessageTypeMap {
        "Initialize": ISimpleProductDetailsExtensionCommandState;
    }
    interface ISimpleProductDetailsExtensionCommandState extends IExtensionCommandState {
        product: Proxy.Entities.SimpleProduct;
        isSelectionMode: boolean;
    }
    interface ISimpleProductDetailsCustomControlState extends ICustomControlState {
        product: Proxy.Entities.SimpleProduct;
        isSelectionMode: boolean;
    }
    interface ISimpleProductDetailsToCustomControlMessageTypeMap extends IViewToExtensionCommandMessageTypeMap, ISimpleProductDetailsToExtensionMessageTypeMap {
        "Initialize": ISimpleProductDetailsCustomControlState;
    }
    interface ICustomControlToSimpleProductDetailsMessageTypeMap extends ICustomControlToViewMessageTypeMap {
        "VisibilityChanged": boolean;
    }
}
declare namespace Commerce.Extensibility {
    type StockCountDetailsJournalLinesUpdatedData = {
        journalLines: Client.Entities.IStockCountLine[];
    };
    type StockCountDetailsJournalSavedData = {
        journal: Proxy.Entities.StockCountJournal;
        journalLines: Client.Entities.IStockCountLine[];
    };
    type StockCountDetailsJournalLineSelectedData = {
        journalLines: Client.Entities.IStockCountLine[];
    };
    interface IStockCountDetailsToExtensionCommandMessageTypeMap extends IViewToExtensionCommandMessageTypeMap {
        "Initialize": IStockCountDetailsExtensionCommandState;
        "JournalLinesUpdated": StockCountDetailsJournalLinesUpdatedData;
        "JournalSaved": StockCountDetailsJournalSavedData;
        "JournalLineSelected": StockCountDetailsJournalLineSelectedData;
        "JournalLineSelectionCleared": void;
    }
    interface IExtensionToStockCountDetailsMessageTypeMap {
    }
    interface IExtensionCommandToStockCountDetailsMessageTypeMap extends IExtensionCommandMessageTypeMap, IExtensionToStockCountDetailsMessageTypeMap {
    }
    interface IStockCountDetailsExtensionCommandState extends IExtensionCommandState {
        isNewJournal: boolean;
        isAdvancedWarehousingEnabled: boolean;
        journal?: Proxy.Entities.StockCountJournal;
        journalLines: Client.Entities.IStockCountLine[];
    }
}

declare namespace Commerce.Extensibility.Dialogs {
    import INumPadInputBroker = Commerce.Peripherals.INumPadInputBroker;
    interface IExtensionTemplatedDialogProxy {
        openDialog(options: Commerce.Client.Entities.Dialogs.ITemplatedDialogOptions): void;
        closeDialog(): void;
        numPadInputBroker(): INumPadInputBroker;
        setButtonDisabledState(buttonId: string, disabled: boolean): void;
    }
    interface IExtensionTemplatedDialog {
        openDialog(): void;
        closeDialog(): void;
    }
}
declare namespace Commerce.Extensibility {
    abstract class DisposableViewControllerBase implements Commerce.Extensibility.IViewController {
        isBackNavigationEnabled: boolean;
        protected _saveInHistory: boolean;
        protected _element: HTMLElement;
        private static VIEW_CONTROLLER_DISPOSAL_DELAY_IN_MILLISECONDS;
        readonly saveInHistory: boolean;
        constructor(saveInHistory: boolean);
        getViewContainer(): HTMLElement;
        onReady(element: HTMLElement): void;
        unload(): void;
        dispose(): void;
    }
}
declare namespace Commerce.Extensibility {
    interface IViewController extends IDisposable {
        saveInHistory: boolean;
        onReady(element: HTMLElement): void;
        unload(): void;
    }
}
declare namespace Commerce.Extensibility {
    class ValueFormatterManager {
        YesNoBooleanFormatter: (value: boolean) => string;
        PriceFormatter: (value: string | number) => string;
        PurchaseTransferOrderTypeFormatter: (value: Proxy.Entities.PurchaseTransferOrderType) => string;
        TransactionTypeFormatter: (value: number, entryStatusValue?: number) => string;
        ShortDateFormatter: (value: Date) => string;
        ShortDateAndTimeFormatter: (value: Date) => string;
        private static _instance;
        private constructor();
        static readonly instance: ValueFormatterManager;
    }
}
declare namespace Commerce.UI.Sdk {
    abstract class PosSdkException {
        private _originatingComponent;
        private _exceptionMessage;
        constructor(originatingComponent: string, message: string);
        abstract getType(): string;
        readonly message: string;
        readonly originatingComponent: string;
    }
}
declare namespace Commerce.UI.Sdk {
    class InvalidConstructorStateException extends PosSdkException {
        getType(): string;
    }
}

