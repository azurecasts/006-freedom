APPNAME=velzyappfree
RG=velzyfree

web:
	DEBUG=007:* npm start

sense:
	open https://$(APPNAME).scm.azurewebsites.net

logs:
	az webapp log tail -n $(APPNAME) -g $(RG) --verbose