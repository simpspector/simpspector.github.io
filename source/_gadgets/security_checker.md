---

title: Security Checker
summary: Checks for known security vulnerabilities, using sensiolabs/security-checker.
active_menu: configuration
config_key: security-checker
reference_config: |
    security-checker:
      director: ./
      level: critical

---

This gadget checks your composer.lock if you have installed packages with security vulnerabilities.

### Parameters

* directory
    * which folder contains the composer.lock, relative to the projects root folder.
    * defaults to './'
* level
    * error level assigned to issues created by this gadget
    * possible values: notice, warning, error or critical
    * default: critical
