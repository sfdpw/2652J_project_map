
#let = ['A', 'B', 'C', 'D']


#a = '<input type=\"checkbox\" onchange=\"handleChange(this, );\">&nbsp;<a href=\".\\sheets\\2652J_dwg_C-{ii}A.pdf\" target=\"_blank\">C-{ii}A<\/a><br><input type=\"checkbox\" onchange=\"handleChange(this, );\">&nbsp;<a href=\".\\sheets\\2652J_dwg_C-{}A_rev01.pdf\" target=\"_blank\">C-{ii}A Rev. 1<\/a>




#    <input type=\"checkbox\" onchange=\"handleChange(this, );\">&nbsp;<a href=\".\\sheets\\2652J_dwg_C-{ii}B.pdf\" target=\"_blank\">C-{ii}B<\/a><br><input type=\"checkbox\" onchange=\"handleChange(this, );\">&nbsp;<a href=\".\\sheets\\2652J_dwg_C-{ii}B_rev01.pdf\" target=\"_blank\">C-{ii}B Rev. 1<\/a><input type=\"checkbox\" onchange=\"handleChange(this, );\">&nbsp;<a href=\".\\sheets\\2652J_dwg_C-{ii}C.pdf\" target=\"_blank\">C-{ii}C<\/a><br><input type=\"checkbox\" onchange=\"handleChange(this, );\">&nbsp;<a href=\".\\sheets\\2652J_dwg_C-{ii}C_rev01.pdf\" target=\"_blank\">C-{ii}C Rev. 1<\/a><input type=\"checkbox\" onchange=\"handleChange(this, );\">&nbsp;<a href=\".\\sheets\\2652J_dwg_C-{ii}D.pdf\" target=\"_blank\">C-{ii}D<\/a><br><input type=\"checkbox\" onchange=\"handleChange(this, );\">&nbsp;<a href=\".\\sheets\\2652J_dwg_C-{ii}D_rev01.pdf\" target=\"_blank\">C-{ii}D Rev. 1<\/a>'

#for ii in range(17,31):

#    for jj in ['A', 'B', 'C', 'D']:

#        print (f'<input type=\\"checkbox\\" onchange=\\"handleChange(this, );\\">&nbsp;<a href=\\".\\\\sheets\\\\2652J_dwg_C-{ii}{jj}.pdf\\" target=\\"_blank\\">C-{ii}{jj}<\/a><br><input type=\\"checkbox\\" onchange=\\"handleChange(this, );\\">&nbsp;<a href=\\".\\\\sheets\\\\2652J_dwg_C-{ii}{jj}_rev01.pdf\\" target=\\"_blank\\">C-{ii}{jj} Rev. 1<\/a>\n')

for _ in open("aaa", "r"):

    print(_[9:len(_):1])
