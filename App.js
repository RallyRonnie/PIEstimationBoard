Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
	launch: function() {
		typeComboBox = this.add({
			xtype: 'rallyportfolioitemtypecombobox',
			listeners:{
				change: function(combobox){
					this._makeBoard(typeComboBox.getRecord().get('TypePath'));
				},
				scope: this
			}
		});
	},
	_makeBoard: function (type) {
		if ( this.piBoard ) { this.piBoard.destroy(); }
// For new X SDK adding Story decoration to PIs 
//		var columnConfig = {
//			xtype: 'rallycardboardcolumn',
//			cardLimit: 50,
//			drawFooter: Ext.emptyFn,
//			enableWipLimit: true
//		};
//		var cardConfig = {
//			xtype: 'rallyportfoliokanbancard',
//			editable: true,
//			fields: ['Parent','UserStories','DisplayColor'],
//			showColorIcon: true
//		};
		this.piBoard = this.add({
			xtype: 'rallycardboard',
			types: [type],
			attribute: 'PreliminaryEstimate',
			context: this.getContext(),
			enableRanking: true,
			cardConfig: {
				editable: true,
				fields: ['Parent','UserStories'],
				showIconsAndHighlightBorder: true,
				showReadyIcon: true,
				showBlockedIcon: true,
				showColorIcon: true,
				showPlusIcon: true,
				showGearIcon: true
			},
// For new X SDK adding Story decoration to PIs
//			cardConfig: cardConfig,
//			columnConfig: columnConfig,
			scope: this
		});
//		columnConfig.additionalFetchFields = [];
//		cardConfig.fields = Rally.apps.portfoliokanban.PortfolioKanbanCard.defaultFields;
	}
});
